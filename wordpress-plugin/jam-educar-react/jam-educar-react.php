<?php
/**
 * Plugin Name: JAM Educar React App
 * Plugin URI: https://jameducar.com
 * Description: Plugin para integrar la aplicación React de JAM Educar en WordPress
 * Version: 1.0.0
 * Author: JAM Educar
 * Author URI: https://jameducar.com
 * License: GPL2
 */

// Evitar acceso directo
if (!defined('ABSPATH')) {
    exit;
}

class JAM_Educar_React {
    
    private $plugin_path;
    private $plugin_url;
    
    public function __construct() {
        $this->plugin_path = plugin_dir_path(__FILE__);
        $this->plugin_url = plugin_dir_url(__FILE__);
        
        // Hooks
        add_action('wp_enqueue_scripts', array($this, 'enqueue_react_app'));
        add_shortcode('jam_educar_app', array($this, 'render_react_app'));
        add_action('init', array($this, 'register_custom_page'));
    }
    
    /**
     * Cargar los archivos JS y CSS del build de React
     */
    public function enqueue_react_app() {
        // Solo cargar en páginas específicas
        if (!is_page('jam-educar-app') && !has_shortcode(get_post()->post_content, 'jam_educar_app')) {
            return;
        }
        
        $build_path = $this->plugin_path . 'dist/';
        $build_url = $this->plugin_url . 'dist/';
        
        // Leer el archivo index.html para extraer los archivos JS y CSS
        $index_file = $build_path . 'index.html';
        
        if (file_exists($index_file)) {
            $content = file_get_contents($index_file);
            
            // Extraer archivos CSS
            preg_match_all('/<link[^>]+href="([^"]*\.css)"[^>]*>/i', $content, $css_matches);
            foreach ($css_matches[1] as $index => $css_file) {
                $css_path = str_replace('./', '', $css_file);
                wp_enqueue_style(
                    'jam-educar-react-' . $index,
                    $build_url . $css_path,
                    array(),
                    '1.0.0'
                );
            }
            
            // Extraer archivos JS
            preg_match_all('/<script[^>]+src="([^"]*\.js)"[^>]*>/i', $content, $js_matches);
            foreach ($js_matches[1] as $index => $js_file) {
                $js_path = str_replace('./', '', $js_file);
                wp_enqueue_script(
                    'jam-educar-react-' . $index,
                    $build_url . $js_path,
                    array(),
                    '1.0.0',
                    true
                );
            }
        }
    }
    
    /**
     * Renderizar el contenedor de la app React
     */
    public function render_react_app($atts) {
        ob_start();
        ?>
        <div id="root"></div>
        <style>
            /* Ocultar header y footer de WordPress en esta página */
            .jam-educar-fullpage #wpadminbar,
            .jam-educar-fullpage .site-header,
            .jam-educar-fullpage .site-footer {
                display: none !important;
            }
            .jam-educar-fullpage #root {
                min-height: 100vh;
            }
        </style>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Registrar página personalizada para la app
     */
    public function register_custom_page() {
        // Crear página automáticamente si no existe
        $page = get_page_by_path('jam-educar-app');
        
        if (!$page) {
            $page_data = array(
                'post_title'    => 'JAM Educar App',
                'post_name'     => 'jam-educar-app',
                'post_content'  => '[jam_educar_app]',
                'post_status'   => 'publish',
                'post_type'     => 'page',
                'post_author'   => 1,
            );
            wp_insert_post($page_data);
        }
    }
}

// Inicializar el plugin
new JAM_Educar_React();

// Template redirect para usar plantilla en blanco
add_filter('template_include', function($template) {
    if (is_page('jam-educar-app')) {
        $plugin_template = plugin_dir_path(__FILE__) . 'template-react-app.php';
        if (file_exists($plugin_template)) {
            return $plugin_template;
        }
    }
    return $template;
});
