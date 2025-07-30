/* =============================================================================
   KONFIGURACIÓN ADICIONAL PARA KONTROL WEBSITE
   Variables de configuración y utilidades extra
   ============================================================================= */

/* Configuración de la aplicación */
window.KontrolConfig = {
    // Información de la aplicación
    app: {
        name: 'Kontrol',
        version: '1.0.0',
        description: 'Sistema de Gestión de Inventario',
        tagline: 'Control completo de tu inventario',
        technology: 'Electron + Node.js + SQLite',
        developer: 'Carlos DB',
        year: '2025',
        github: 'https://github.com/CarlosDB25',
        email: 'carlosdiazmaerio@gmail.com'
    },
    
    // Configuración de la página
    site: {
        title: 'Kontrol - Sistema de Gestión de Inventario',
        description: 'Aplicación de escritorio desarrollada con Electron para la gestión completa de inventarios, movimientos de productos y generación de reportes empresariales.',
        keywords: 'inventario, gestión, stock, productos, movimientos, reportes, electron, SQLite, pequeñas empresas, control de inventario',
        author: 'Carlos DB',
        language: 'es',
        charset: 'UTF-8'
    },
    
    // Configuración de descarga
    downloads: {
        windows: {
            url: 'Kontrol-1.0.0-portable.exe',
            size: '90 MB',
            version: '1.0.0',
            requirements: 'Windows 7/8/10/11 (64-bit)',
            features: [
                'Sin instalación requerida',
                'Un solo archivo ejecutable', 
                'Optimizado para hardware limitado',
                'Base de datos SQLite incluida'
            ]
        }
    },
    
    // Configuración de analytics
    analytics: {
        enabled: false, // Cambiar a true cuando esté listo
        googleAnalyticsId: 'GA_MEASUREMENT_ID', // Reemplazar con ID real
        events: {
            download: 'download_app',
            cta_click: 'cta_button_click',
            navigation: 'navigation_click',
            contact: 'contact_interaction'
        }
    },
    
    // Configuración de contacto
    contact: {
        email: 'carlosdiazmaerio@gmail.com',
        github: '@CarlosDB25',
        developer: 'Carlos DB - 2025'
    },
    
    // Configuración de features
    features: [
        {
            icon: 'package',
            title: 'Gestión de Productos',
            description: 'Registro completo de productos con miniaturas, control de stock en tiempo real, edición y eliminación. Sistema de productos activos/inactivos con alertas de stock mínimo.',
            color: 'primary'
        },
        {
            icon: 'clipboard',
            title: 'Control de Movimientos',
            description: 'Registro de entradas y salidas, salidas grupales para múltiples productos, historial completo de movimientos con actualización automática de stock y manejo de precios.',
            color: 'success'
        },
        {
            icon: 'bar-chart',
            title: 'Reportes y Análisis',
            description: 'Reportes diarios y mensuales, historial detallado por producto, indicadores clave empresariales y exportación a PDF con logo corporativo profesional.',
            color: 'info'
        },
        {
            icon: 'monitor',
            title: 'Interfaz Moderna',
            description: 'Diseño responsivo con Electron, sistema de notificaciones integrado, navegación fluida entre módulos y marca minimalista con efectos visuales profesionales.',
            color: 'warning'
        }
    ],
    
    // Configuración de animaciones
    animations: {
        duration: {
            fast: 150,
            normal: 300,
            slow: 500
        },
        easing: {
            ease: 'ease',
            easeInOut: 'ease-in-out',
            easeOut: 'ease-out'
        },
        enabled: true // Permitir deshabilitar animaciones
    }
};

/* =============================================================================
   UTILIDADES AVANZADAS
   ============================================================================= */

// Detección de capabilities del navegador
window.KontrolUtils = {
    // Detectar soporte para características modernas
    hasIntersectionObserver: 'IntersectionObserver' in window,
    hasServiceWorker: 'serviceWorker' in navigator,
    hasLocalStorage: typeof Storage !== 'undefined',
    hasTouchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    
    // Utilidades de localStorage
    storage: {
        set: function(key, value) {
            if (this.hasLocalStorage) {
                try {
                    localStorage.setItem(`kontrol_${key}`, JSON.stringify(value));
                    return true;
                } catch (e) {
                    console.warn('No se pudo guardar en localStorage:', e);
                    return false;
                }
            }
            return false;
        },
        
        get: function(key, defaultValue = null) {
            if (this.hasLocalStorage) {
                try {
                    const item = localStorage.getItem(`kontrol_${key}`);
                    return item ? JSON.parse(item) : defaultValue;
                } catch (e) {
                    console.warn('No se pudo leer de localStorage:', e);
                    return defaultValue;
                }
            }
            return defaultValue;
        },
        
        remove: function(key) {
            if (this.hasLocalStorage) {
                localStorage.removeItem(`kontrol_${key}`);
            }
        }
    },
    
    // Utilidades de URL y navegación
    url: {
        getParams: function() {
            return new URLSearchParams(window.location.search);
        },
        
        hasParam: function(param) {
            return this.getParams().has(param);
        },
        
        getParam: function(param, defaultValue = null) {
            return this.getParams().get(param) || defaultValue;
        }
    },
    
    // Utilidades de dispositivo
    device: {
        isMobile: function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        
        isIOS: function() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent);
        },
        
        isAndroid: function() {
            return /Android/.test(navigator.userAgent);
        },
        
        getOS: function() {
            const userAgent = navigator.userAgent;
            if (/Win/.test(userAgent)) return 'Windows';
            if (/Mac/.test(userAgent)) return 'macOS';
            if (/Linux/.test(userAgent)) return 'Linux';
            if (/Android/.test(userAgent)) return 'Android';
            if (/iPhone|iPad/.test(userAgent)) return 'iOS';
            return 'Unknown';
        }
    },
    
    // Utilidades de formato
    format: {
        fileSize: function(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        },
        
        number: function(num) {
            return new Intl.NumberFormat('es-ES').format(num);
        },
        
        date: function(date) {
            return new Intl.DateTimeFormat('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }).format(new Date(date));
        }
    }
};

/* =============================================================================
   CONFIGURACIÓN INICIAL
   ============================================================================= */

// Aplicar configuración inicial cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar tema del usuario si está guardado
    const savedTheme = KontrolUtils.storage.get('theme', 'dark');
    document.body.setAttribute('data-theme', savedTheme);
    
    // Detectar preferencia de animaciones del sistema
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        KontrolConfig.animations.enabled = false;
        document.body.classList.add('reduced-motion');
    }
    
    // Detectar modo oscuro del sistema
    if (window.matchMedia('(prefers-color-scheme: light)').matches && savedTheme === 'auto') {
        document.body.setAttribute('data-theme', 'light');
    }
    
    // Registrar service worker si está disponible
    if (KontrolUtils.hasServiceWorker && KontrolConfig.site.serviceWorker) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('Service Worker no pudo registrarse:', err);
        });
    }
    
    // Configurar analytics si está habilitado
    if (KontrolConfig.analytics.enabled) {
        initAnalytics();
    }
    
    // Aplicar configuración de accesibilidad
    initAccessibility();
});

/* =============================================================================
   FUNCIONES DE CONFIGURACIÓN
   ============================================================================= */

function initAnalytics() {
    // Placeholder para Google Analytics o similar
    console.log('Analytics inicializado');
    
    // Ejemplo de configuración de Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('config', KontrolConfig.analytics.googleAnalyticsId, {
            page_title: KontrolConfig.site.title,
            page_location: window.location.href
        });
    }
}

function initAccessibility() {
    // Configurar navegación por teclado
    document.addEventListener('keydown', function(e) {
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Escape para cerrar modales/menús
        if (e.key === 'Escape') {
            // Cerrar menú móvil si está abierto
            const mobileMenu = document.querySelector('.nav-menu.active');
            if (mobileMenu) {
                document.querySelector('.nav-toggle').click();
            }
        }
    });
    
    // Remover clase de navegación por teclado al hacer clic
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Configurar ARIA labels dinámicos
    updateAriaLabels();
}

function updateAriaLabels() {
    // Actualizar labels para screen readers
    const downloadButtons = document.querySelectorAll('.download-card');
    downloadButtons.forEach(button => {
        const platform = button.querySelector('h3').textContent;
        const size = button.querySelector('.download-size').textContent;
        button.setAttribute('aria-label', `Descargar Kontrol para ${platform}, tamaño: ${size}`);
    });
    
    // Actualizar navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const text = link.textContent;
        link.setAttribute('aria-label', `Ir a la sección ${text}`);
    });
}
