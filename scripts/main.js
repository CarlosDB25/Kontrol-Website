// =============================================================================
// KONTROL WEBSITE JAVASCRIPT
// Funcionalidad interactiva para la página web de Kontrol
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initNavigation();
    initScrollEffects();
    initAnimations();
    initMobileMenu();
    initSmoothScrolling();
    initParallaxEffects();
});

// =============================================================================
// NAVEGACIÓN
// =============================================================================
function initNavigation() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 29, 35, 0.98)';
            header.style.borderBottomColor = 'rgba(60, 64, 67, 0.5)';
        } else {
            header.style.background = 'rgba(26, 29, 35, 0.95)';
            header.style.borderBottomColor = '#3c4043';
        }
    });
    
    // Destacar enlace activo según la sección visible
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Usar offset dinámico para detección más precisa (reducido)
            const scrollOffset = getOptimalOffset() + 10;
            
            if (pageYOffset >= (sectionTop - scrollOffset) && 
                pageYOffset < (sectionTop + sectionHeight - scrollOffset)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// =============================================================================
// MENÚ MÓVIL
// =============================================================================
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevenir scroll del body cuando el menú está abierto
            document.body.classList.toggle('menu-open');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// =============================================================================
// EFECTOS DE SCROLL
// =============================================================================
function initScrollEffects() {
    // Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Agregar clase para animaciones específicas
                entry.target.classList.add('animate-in');
                
                // Para elementos con delay escalonado
                if (entry.target.classList.contains('stagger-animation')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    const animatedElements = document.querySelectorAll(
        '.feature-card, .download-card, .contact-item, .showcase-item, .stat'
    );
    
    animatedElements.forEach(el => {
        // Configurar estado inicial
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(el);
    });
    
    // Observar grids para animación escalonada
    const gridContainers = document.querySelectorAll('.features-grid, .download-grid, .contact-grid');
    gridContainers.forEach(grid => {
        grid.classList.add('stagger-animation');
        observer.observe(grid);
    });
}

// =============================================================================
// ANIMACIONES ESPECÍFICAS
// =============================================================================
function initAnimations() {
    // Animación del mockup de la app
    const mockupScreen = document.querySelector('.mockup-screen');
    if (mockupScreen) {
        // Efecto de hover más dinámico
        mockupScreen.addEventListener('mouseenter', function() {
            this.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1.05)';
        });
        
        mockupScreen.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateY(-5deg) rotateX(5deg) scale(1)';
        });
    }
    
    // Animación de los controles del mockup
    const controls = document.querySelectorAll('.control');
    controls.forEach((control, index) => {
        setTimeout(() => {
            control.style.opacity = '1';
            control.style.transform = 'scale(1)';
        }, index * 200 + 1000);
        
        // Estado inicial
        control.style.opacity = '0.5';
        control.style.transform = 'scale(0.8)';
        control.style.transition = 'all 0.3s ease';
    });
    
    // Animación de las tareas en el mockup
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach((task, index) => {
        setTimeout(() => {
            task.style.opacity = '1';
            task.style.transform = 'translateX(0)';
        }, index * 300 + 1500);
        
        // Estado inicial
        task.style.opacity = '0';
        task.style.transform = 'translateX(-20px)';
        task.style.transition = 'all 0.4s ease';
    });
    
    // Efecto de typing en el título hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titlePart = heroTitle.querySelector('.title-part');
        const highlight = heroTitle.querySelector('.highlight');
        
        if (titlePart && highlight) {
            const text1 = titlePart.textContent;
            const text2 = highlight.textContent;
            
            // Ocultar inicialmente
            titlePart.textContent = '';
            highlight.textContent = '';
            heroTitle.style.opacity = '1';
            
            let i = 0;
            
            // Escribir primera parte
            const typeWriter1 = () => {
                if (i < text1.length) {
                    titlePart.textContent += text1.charAt(i);
                    i++;
                    setTimeout(typeWriter1, 50);
                } else {
                    // Comenzar segunda parte después de una pausa
                    setTimeout(() => {
                        let j = 0;
                        const typeWriter2 = () => {
                            if (j < text2.length) {
                                highlight.textContent += text2.charAt(j);
                                j++;
                                setTimeout(typeWriter2, 50);
                            }
                        };
                        typeWriter2();
                    }, 200);
                }
            };
            
            setTimeout(typeWriter1, 500);
        }
    }
}

// =============================================================================
// SCROLL SUAVE
// =============================================================================
function initSmoothScrolling() {
    // Scroll suave para enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Usar offset dinámico basado en el tamaño de la pantalla
                const optimalOffset = getOptimalOffset();
                const targetPosition = targetSection.offsetTop - optimalOffset;
                
                // Scroll suave personalizado con easing
                smoothScrollTo(targetPosition, 1200); // 1.2 segundos de duración
                
                // Agregar animación al enlace clickeado
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

// Función de scroll suave personalizada con easing
function smoothScrollTo(targetY, duration) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = new Date().getTime();

    // Función de easing suave (ease-in-out-cubic)
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function step() {
        const elapsed = new Date().getTime() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startY + distance * ease);
        
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}

// Función para calcular offset dinámico
function getOptimalOffset() {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const viewportHeight = window.innerHeight;
    
    // Offset reducido otros 20px y ajustado proporcionalmente
    let extraOffset = 0; // era 10, ahora 0 (solo header)
    if (viewportHeight > 800) {
        extraOffset = 0; // era 20, ahora 0
    } else if (viewportHeight < 600) {
        extraOffset = 0; // ya era 0
    }
    
    return headerHeight + extraOffset;
}

// =============================================================================
// EFECTOS PARALLAX
// =============================================================================
function initParallaxEffects() {
    const heroSection = document.querySelector('.hero');
    const mockupContainer = document.querySelector('.app-mockup');
    
    if (heroSection && mockupContainer) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            // Efecto parallax sutil en el mockup
            mockupContainer.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
    
    // Efecto parallax en el fondo del hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (heroSection) {
            heroSection.style.backgroundPosition = `center ${rate}px`;
        }
    });
}

// =============================================================================
// UTILIDADES Y HELPERS
// =============================================================================

// Debounce function para optimizar eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce a eventos de scroll pesados
const debouncedScrollHandler = debounce(function() {
    // Aquí puedes agregar lógica de scroll más pesada si es necesario
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// =============================================================================
// INTERACCIONES ESPECÍFICAS DE KONTROL
// =============================================================================

// Simulación de descarga (para demo)
function initDownloadButtons() {
    const downloadCards = document.querySelectorAll('.download-card');
    
    downloadCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.querySelector('h3').textContent;
            
            // Efecto visual de descarga
            const originalContent = this.innerHTML;
            this.innerHTML = `
                <div class="download-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7,10 12,15 17,10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </div>
                <div class="download-info">
                    <h3>Descargando...</h3>
                    <p>Preparando Kontrol para ${platform}</p>
                </div>
            `;
            
            this.style.background = 'linear-gradient(135deg, #4285f4, #34a853)';
            this.style.color = 'white';
            
            setTimeout(() => {
                this.innerHTML = originalContent;
                this.style.background = '';
                this.style.color = '';
                
                // Mostrar mensaje de éxito
                showNotification(`¡Kontrol para ${platform} se descargará pronto!`, 'success');
            }, 2000);
        });
    });
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-secondary);
        color: var(--text-primary);
        padding: var(--space-md) var(--space-lg);
        border-radius: var(--radius-md);
        border: 1px solid var(--border-primary);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Manejar cierre
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto cierre
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Inicializar botones de descarga cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initDownloadButtons();
});

// =============================================================================
// EFECTOS DE PERFORMANCE Y OPTIMIZACIÓN
// =============================================================================

// Lazy loading para imágenes (si se agregan en el futuro)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Preloader simple
function initPreloader() {
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    });
}

// Detección de dispositivo táctil
function initTouchDetection() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
        
        // Ajustar hover effects para dispositivos táctiles
        const hoverElements = document.querySelectorAll('.feature-card, .download-card, .contact-item');
        hoverElements.forEach(el => {
            el.addEventListener('touchstart', function() {
                this.classList.add('touch-hover');
            });
            
            el.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-hover');
                }, 300);
            });
        });
    }
}

// Inicializar optimizaciones
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initPreloader();
    initTouchDetection();
});

// =============================================================================
// ANALYTICS Y TRACKING (placeholder para futuro uso)
// =============================================================================
function trackEvent(eventName, eventData) {
    // Placeholder para Google Analytics o similar
    console.log('Event tracked:', eventName, eventData);
}

// Tracking de interacciones importantes
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        trackEvent('cta_click', { button: 'primary', page: 'landing' });
    }
    
    if (e.target.closest('.download-card')) {
        const platform = e.target.closest('.download-card').querySelector('h3').textContent;
        trackEvent('download_intent', { platform: platform });
    }
});

// =============================================================================
// EASTER EGGS Y DETALLES ESPECIALES
// =============================================================================

// Konami Code para desarrolladores
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('¡Modo desarrollador activado! 🚀', 'success');
        document.body.classList.add('developer-mode');
        konamiCode = [];
    }
});

// =============================================================================
// FUNCIÓN DE DESCARGA
// =============================================================================
function handleDownload(event) {
    event.preventDefault();
    
    // Mostrar notificación de descarga
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-primary);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;
    notification.textContent = '⬇️ Iniciando descarga...';
    document.body.appendChild(notification);
    
    // Crear enlace temporal para descarga
    const link = document.createElement('a');
    link.href = 'downloads/Kontrol-1.0.0-completo.zip';
    link.download = 'Kontrol-1.0.0-completo.zip';
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // Ejecutar descarga
    link.click();
    
    // Actualizar notificación
    setTimeout(() => {
        notification.textContent = '✅ Descarga iniciada correctamente';
        notification.style.background = 'var(--accent-success)';
    }, 500);
    
    // Remover notificación
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.body.removeChild(link);
        }, 300);
    }, 3000);
}

// Consola de bienvenida para desarrolladores
console.log(`
%c
██╗  ██╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     
██║ ██╔╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     
█████╔╝ ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     
██╔═██╗ ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     
██║  ██╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝

🎨 Website desarrollado siguiendo la paleta de Kontrol
🚀 ¿Interesado en contribuir? Contáctanos!
`, 'color: #4285f4; font-weight: bold;');

console.log('%c¡Hola desarrollador! 👋', 'color: #34a853; font-size: 16px; font-weight: bold;');
console.log('%cEsta web usa la paleta de colores oficial de Kontrol', 'color: #bdc1c6;');
console.log('%cPrimarios: #4285f4 | Éxito: #34a853 | Fondo: #1a1d23', 'color: #9aa0a6;');
