<?php
/**
 * Template Name: JAM Educar React App
 * Template Post Type: page
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class('jam-educar-fullpage'); ?>>
    
    <!-- Contenedor de la app React -->
    <div id="root"></div>
    
    <?php wp_footer(); ?>
</body>
</html>
