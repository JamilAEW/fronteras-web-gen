// ==========================================
// HOOK PERSONALIZADO: useScrollAnimation
// ==========================================
// Este hook detecta cuando un elemento aparece en la pantalla (viewport)
// y devuelve un estado 'isVisible' que se vuelve true cuando el elemento es visible
//
// USO:
// const { ref, isVisible } = useScrollAnimation();
// <section ref={ref} className={isVisible ? 'fade-in' : 'fade-out'}>
//
// PARÁMETROS:
// - threshold: Porcentaje del elemento que debe estar visible para activar (0.1 = 10%)

import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  // ========================================
  // ESTADO: isVisible
  // ========================================
  // false: El elemento no ha aparecido en pantalla aún
  // true: El elemento está visible (o ya fue visible una vez)
  const [isVisible, setIsVisible] = useState(false);
  
  // ========================================
  // REF: Referencia al elemento del DOM
  // ========================================
  // Se vincula al elemento que queremos observar
  const ref = useRef<HTMLElement>(null);

  // ========================================
  // EFFECT: Configuración del observador
  // ========================================
  useEffect(() => {
    // ----------------------------------------
    // Intersection Observer API
    // ----------------------------------------
    // Observa cuando el elemento entra en el viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento está intersectando (visible en pantalla)
        if (entry.isIntersecting) {
          setIsVisible(true);  // Activar animación
          // NOTA: Una vez visible, permanece true (no vuelve a false)
        }
      },
      { 
        threshold  // Cuánto del elemento debe estar visible (0.1 = 10%)
      }
    );

    // ----------------------------------------
    // Iniciar observación
    // ----------------------------------------
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);  // Empezar a observar el elemento
    }

    // ----------------------------------------
    // Cleanup: Limpieza al desmontar
    // ----------------------------------------
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);  // Dejar de observar
      }
    };
  }, [threshold]);  // Re-ejecutar si threshold cambia

  // ========================================
  // RETORNO
  // ========================================
  // ref: Para vincular al elemento que queremos observar
  // isVisible: Estado booleano (true cuando el elemento es visible)
  return { ref, isVisible };
};
