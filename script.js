/* ==========================================================================
   Raisa Jahan Rini - Portfolio Interactive Logic
   Vanilla JavaScript ES6+
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Data Store (Skills & Projects)
    // ----------------------------------------------------------------------
    const skillsData = [
        { name: 'C++ / OOP', category: 'languages', level: 92, icon: 'fa-solid fa-code', color: '#00599C' },
        { name: 'Python', category: 'languages', level: 88, icon: 'fa-brands fa-python', color: '#3776AB' },
        { name: 'JavaScript (ES6+)', category: 'languages', level: 90, icon: 'fa-brands fa-square-js', color: '#F7DF1E' },
        { name: 'SQL / Relational DB', category: 'languages', level: 85, icon: 'fa-solid fa-database', color: '#4479A1' },
        
        { name: 'React.js', category: 'web', level: 90, icon: 'fa-brands fa-react', color: '#61DAFB' },
        { name: 'Node.js & Express', category: 'web', level: 88, icon: 'fa-brands fa-node-js', color: '#339933' },
        { name: 'HTML5 & CSS3 / SASS', category: 'web', level: 94, icon: 'fa-brands fa-html5', color: '#E34F26' },
        { name: 'REST APIs & WebSockets', category: 'web', level: 87, icon: 'fa-solid fa-network-wired', color: '#6366F1' },

        { name: 'SQA & Software Testing', category: 'tools', level: 82, icon: 'fa-solid fa-list-check', color: '#10B981' },
        { name: 'PyTorch & Convolutional Nets', category: 'ai', level: 82, icon: 'fa-solid fa-brain', color: '#EE4C2C' },
        { name: 'OpenCV & Computer Vision', category: 'ai', level: 80, icon: 'fa-solid fa-eye', color: '#5C3EE8' },
        { name: 'Pandas / NumPy Data Stack', category: 'ai', level: 85, icon: 'fa-solid fa-chart-simple', color: '#150458' },

        { name: 'Git & GitHub', category: 'tools', level: 92, icon: 'fa-brands fa-github', color: '#181717' },
        { name: 'PostgreSQL & MongoDB', category: 'tools', level: 84, icon: 'fa-solid fa-server', color: '#336791' },
        { name: 'Docker Containerization', category: 'tools', level: 75, icon: 'fa-brands fa-docker', color: '#2496ED' },
        { name: 'Postman API Testing', category: 'tools', level: 90, icon: 'fa-solid fa-vial', color: '#FF6C37' }
    ];

    const projectsData = [
        {
            id: 'medvision-ai',
            title: 'MedVision AI Diagnostic System',
            category: 'capstone',
            categoryName: 'AI Capstone',
            icon: 'fa-solid fa-microscope',
            shortDesc: 'Final year capstone research project: Deep Learning framework for automated pulmonary X-ray anomaly segmentation.',
            longDesc: 'MedVision AI is an end-to-end medical imaging tool that utilizes fine-tuned ResNet-50 and U-Net architectures trained on chest X-ray datasets. It generates diagnostic heatmaps (Grad-CAM) to assist radiologists in identifying pneumonia, COVID-19, and pulmonary infiltrates with high accuracy.',
            tech: ['Python', 'PyTorch', 'Flask API', 'React.js', 'OpenCV', 'Tailwind'],
            highlights: ['Sub-second inference time via optimized PyTorch C++ backend bindings', 'Interactive Grad-CAM heatmaps overlay on web UI', 'Designed for medical thesis presentation'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            id: 'devconnect-platform',
            title: 'DevConnect Technical Community',
            category: 'fullstack',
            categoryName: 'Full-Stack Web',
            icon: 'fa-solid fa-code-fork',
            shortDesc: 'Full-stack platform for developer code snippet sharing, real-time markdown collaboration, and Q&A forums.',
            longDesc: 'DevConnect is a feature-rich web platform designed to foster peer-to-peer technical discussions among engineering students. Features include live collaborative markdown editing using WebSockets, JWT authentication, user reputation scoring, and code syntax highlighting.',
            tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Socket.io', 'JWT'],
            highlights: ['Real-time multi-user document synchronization with WebSockets', 'Robust REST API with modular MVC architecture', 'Indexed MongoDB search queries'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            id: 'algovisualizer-3d',
            title: 'Interactive AlgoVisualizer Engine',
            category: 'systems',
            categoryName: 'Systems & Algo',
            icon: 'fa-solid fa-sitemap',
            shortDesc: 'Interactive web application visualizing sorting, graph traversal (Dijkstra, A*), and dynamic programming step-by-step.',
            longDesc: 'Built to deepen understanding of core Computer Science Data Structures & Algorithms. Allows users to adjust execution speed, customize array inputs, trigger maze generation algorithms, and visually step through execution states in real-time.',
            tech: ['Vanilla JS (ES6)', 'HTML5 Canvas API', 'CSS Grid', 'Data Structures'],
            highlights: ['Zero external dependency vanilla JS implementation', 'Custom event loop timing controls for variable playback speed', 'Interactive wall building for maze solving algorithms'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            id: 'smart-campus-portal',
            title: 'Smart Campus Management Portal',
            category: 'fullstack',
            categoryName: 'Full-Stack Web',
            icon: 'fa-solid fa-university',
            shortDesc: 'Enterprise university management portal for student enrollment, grade analytics, and automated course scheduling.',
            longDesc: 'A comprehensive academic management dashboard created as a Database Systems course project. Features complex SQL relational schemas, role-based access control (Students, Faculty, Admin), and student GPA analytics charts.',
            tech: ['React.js', 'PostgreSQL', 'Express.js', 'Chart.js', 'CSS Modules'],
            highlights: ['ACID compliant database transactions for grade submissions', 'Responsive dashboard analytics visualization', 'Role-based route protection'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            id: 'cryptopulse-dashboard',
            title: 'CryptoPulse Real-Time Dashboard',
            category: 'fullstack',
            categoryName: 'Full-Stack Web',
            icon: 'fa-solid fa-chart-line',
            shortDesc: 'Real-time cryptocurrency analytics suite with live price tickers, sentiment indicators, and portfolio tracker.',
            longDesc: 'Integrates third-party REST APIs and WebSockets to deliver up-to-second crypto market trends. Includes historical price performance charts, custom price alerts, and mock portfolio management.',
            tech: ['JavaScript', 'Chart.js', 'CoinGecko API', 'CSS Glassmorphism'],
            highlights: ['Asynchronous API polling with dynamic error recovery', 'LocalStorage persistent portfolio tracking', 'Dark mode glassmorphism UI'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            id: 'async-task-engine',
            title: 'C++ Distributed Task Scheduler',
            category: 'systems',
            categoryName: 'Systems & Algo',
            icon: 'fa-solid fa-gears',
            shortDesc: 'High-throughput asynchronous job queue processor written in modern C++ featuring thread pools and priority queues.',
            longDesc: 'Developed to demonstrate multi-threaded synchronization and operating system concepts. Features a worker thread pool, priority queue scheduling, thread-safe mutex guards, and execution profiling metrics.',
            tech: ['C++17', 'POSIX Threads', 'Mutex / Condition Vars', 'CMake'],
            highlights: ['Zero data races validated with ThreadSanitizer', 'Handles 10,000+ concurrent simulated tasks', 'Clean Object-Oriented design'],
            demoUrl: '#',
            githubUrl: '#'
        }
    ];

    // ----------------------------------------------------------------------
    // 2. Typing Effect in Hero
    // ----------------------------------------------------------------------
    const typingPhrases = [
        'Final Semester CSE Senior 🎓',
        'React & Node.js Developer 💻',
        'Software Quality Assurance (SQA) Enthusiast 🧪',
        'AI & Computer Vision Researcher 🔬',
        'Competitive Programmer & Problem Solver 🧩'
    ];
    
    const typingTextEl = document.getElementById('typing-text');
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeLoop() {
        const currentPhrase = typingPhrases[phraseIdx];

        if (isDeleting) {
            typingTextEl.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
            typingSpeed = 50;
        } else {
            typingTextEl.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIdx === currentPhrase.length) {
            typingSpeed = 2000; // Pause at end of phrase
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % typingPhrases.length;
            typingSpeed = 500; // Pause before new phrase
        }

        setTimeout(typeLoop, typingSpeed);
    }

    if (typingTextEl) {
        typeLoop();
    }

    // ----------------------------------------------------------------------
    // 3. Background Particle Canvas
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = [];
        const numParticles = Math.min(Math.floor(width / 15), 70);

        const mouse = { x: null, y: null, radius: 150 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.radius = Math.random() * 2 + 1;
            }

            draw() {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = isDark ? 'rgba(99, 102, 241, 0.6)' : 'rgba(79, 70, 229, 0.5)';
                ctx.fill();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const angle = Math.atan2(dy, dx);
                        this.x -= Math.cos(angle) * 1.5;
                        this.y -= Math.sin(angle) * 1.5;
                    }
                }
            }
        }

        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        function connectParticles() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const strokeColor = isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.08)';

            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.strokeStyle = strokeColor;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animateCanvas);
        }

        animateCanvas();
    }

    // ----------------------------------------------------------------------
    // 4. Dark / Light Theme Switcher
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    const savedTheme = localStorage.getItem('raisa_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('raisa_theme', nextTheme);
        updateThemeIcon(nextTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }

    // ----------------------------------------------------------------------
    // 5. Render & Filter Skills
    // ----------------------------------------------------------------------
    const skillsGrid = document.getElementById('skills-grid');
    const skillTabs = document.querySelectorAll('.skill-tab');

    function renderSkills(category = 'all') {
        if (!skillsGrid) return;
        skillsGrid.innerHTML = '';

        const filtered = category === 'all' 
            ? skillsData 
            : skillsData.filter(s => s.category === category);

        filtered.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card glass-card';
            card.innerHTML = `
                <div class="skill-top">
                    <div class="skill-icon-wrapper">
                        <i class="${skill.icon} skill-icon" style="color: ${skill.color}"></i>
                        <span class="skill-name">${skill.name}</span>
                    </div>
                    <span class="skill-level-badge">${skill.level}%</span>
                </div>
                <div class="skill-bar-container">
                    <div class="skill-bar-fill" style="width: 0%" data-target="${skill.level}"></div>
                </div>
            `;
            skillsGrid.appendChild(card);
        });

        // Trigger progress bar animation
        setTimeout(() => {
            document.querySelectorAll('.skill-bar-fill').forEach(bar => {
                const target = bar.getAttribute('data-target');
                bar.style.width = `${target}%`;
            });
        }, 100);
    }

    renderSkills('all');

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.getAttribute('data-category');
            renderSkills(category);
        });
    });

    // ----------------------------------------------------------------------
    // 6. Render & Filter Projects
    // ----------------------------------------------------------------------
    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderProjects(filter = 'all') {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';

        const filtered = filter === 'all' 
            ? projectsData 
            : projectsData.filter(p => p.category === filter);

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card glass-card';
            card.innerHTML = `
                <div class="project-card-header">
                    <div class="project-banner">
                        <i class="${project.icon} project-banner-icon"></i>
                    </div>
                    <span class="project-category-badge">${project.categoryName}</span>
                </div>
                <div class="project-card-body">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.shortDesc}</p>
                    <div class="project-tech-tags">
                        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <div class="project-card-footer">
                        <button class="btn btn-primary btn-sm open-project-modal" data-id="${project.id}">
                            <span>View Details</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });

        // Rebind click handlers for modal
        document.querySelectorAll('.open-project-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projId = btn.getAttribute('data-id');
                openProjectModal(projId);
            });
        });
    }

    renderProjects('all');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });

    // Project Detail Modal Logic
    const projectModal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    function openProjectModal(id) {
        const project = projectsData.find(p => p.id === id);
        if (!project || !projectModal || !modalBody) return;

        modalBody.innerHTML = `
            <div style="margin-bottom: 20px;">
                <span class="badge-tag"><i class="${project.icon}"></i> ${project.categoryName}</span>
                <h2 style="font-size: 1.8rem; margin-top: 10px; margin-bottom: 12px;">${project.title}</h2>
                <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.6;">${project.longDesc}</p>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: var(--accent-primary);">Key Architectural Highlights:</h4>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                    ${project.highlights.map(h => `<li style="font-size: 0.92rem; color: var(--text-secondary);"><i class="fa-solid fa-circle-check" style="color: var(--accent-emerald); margin-right: 8px;"></i>${h}</li>`).join('')}
                </ul>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: var(--accent-primary);">Technologies Employed:</h4>
                <div class="tags-container">
                    ${project.tech.map(t => `<span class="tag"><i class="fa-solid fa-code"></i> ${t}</span>`).join('')}
                </div>
            </div>

            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                <a href="${project.githubUrl}" target="_blank" onclick="alert('Demo Repository Simulation: GitHub source available upon interview request!')" class="btn btn-primary btn-sm">
                    <i class="fa-brands fa-github"></i> Repository
                </a>
                <a href="${project.demoUrl}" target="_blank" onclick="alert('Live Project Simulation: MedVision AI / Platform environment online!')" class="btn btn-outline btn-sm">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
            </div>
        `;

        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ----------------------------------------------------------------------
    // 7. Stats Counter Animation
    // ----------------------------------------------------------------------
    const statNumbers = document.querySelectorAll('.stat-number');
    let animatedStats = false;

    function checkStatsScroll() {
        if (animatedStats) return;
        const statsBar = document.querySelector('.stats-bar');
        if (!statsBar) return;

        const rect = statsBar.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            animatedStats = true;
            statNumbers.forEach(stat => {
                const target = parseFloat(stat.getAttribute('data-target'));
                const isFloat = target % 1 !== 0;
                let current = 0;
                const increment = target / 40;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = isFloat ? current.toFixed(2) : Math.floor(current) + '+';
                }, 30);
            });
        }
    }

    window.addEventListener('scroll', checkStatsScroll);
    checkStatsScroll();

    // ----------------------------------------------------------------------
    // 8. Terminal Tab & Interactive CLI Switcher
    // ----------------------------------------------------------------------
    const termTabs = document.querySelectorAll('.term-tab');
    const codeViews = document.querySelectorAll('.code-view');

    termTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            termTabs.forEach(t => t.classList.remove('active'));
            codeViews.forEach(v => v.classList.remove('active'));

            tab.classList.add('active');
            const targetFile = tab.getAttribute('data-file');
            const targetView = document.getElementById(`code-${targetFile}`);
            if (targetView) targetView.classList.add('active');
        });
    });

    // CLI Commands Implementation
    const cliInput = document.getElementById('cli-input');
    const cliOutput = document.getElementById('cli-output');

    if (cliInput && cliOutput) {
        cliInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = cliInput.value.trim().toLowerCase();
                cliInput.value = '';
                executeCliCommand(cmd);
            }
        });
    }

    function executeCliCommand(cmd) {
        if (!cmd) return;

        // Print entered command line
        const cmdLine = document.createElement('p');
        cmdLine.innerHTML = `<span class="cli-prompt">raisa@cse-terminal:~$</span> ${escapeHtml(cmd)}`;
        cliOutput.appendChild(cmdLine);

        const responseEl = document.createElement('p');
        responseEl.className = 'cli-hint';

        switch (cmd) {
            case 'help':
                responseEl.innerHTML = `
                    Available commands:<br>
                    - <span class="cmd-highlight">about</span> : Academic summary & background<br>
                    - <span class="cmd-highlight">skills</span> : Key programming languages & tech<br>
                    - <span class="cmd-highlight">projects</span> : Highlights of featured projects<br>
                    - <span class="cmd-highlight">cgpa</span> : Display current academic CGPA<br>
                    - <span class="cmd-highlight">resume</span> : View & download Raisa's CV<br>
                    - <span class="cmd-highlight">contact</span> : Get email & social links<br>
                    - <span class="cmd-highlight">clear</span> : Clear terminal screen
                `;
                break;
            case 'about':
                responseEl.innerHTML = `Raisa Jahan Rini - Final Semester CSE Senior skilled in React.js, Node.js, and Software Quality Assurance (SQA) & testing methodologies.`;
                break;
            case 'skills':
                responseEl.innerHTML = `React.js, Node.js, Express, SQA / Testing, JavaScript (ES6+), C++, Python, PostgreSQL, MongoDB, PyTorch, Git.`;
                break;
            case 'projects':
                responseEl.innerHTML = `1. MedVision AI (Capstone)<br>2. DevConnect Platform<br>3. AlgoVisualizer 3D<br>4. Smart Campus Management`;
                break;
            case 'cgpa':
                responseEl.innerHTML = `<span style="color: var(--accent-emerald); font-weight: bold;">CGPA: 3.92 / 4.00</span> (Dean's List Awardee)`;
                break;
            case 'resume':
                openResumeModal();
                responseEl.innerHTML = `Opening Raisa Jahan Rini's CV Modal...`;
                break;
            case 'contact':
                responseEl.innerHTML = `Email: raisa.jahan.rini@example.com | LinkedIn: /in/raisa-jahan-rini | GitHub: /raisa-jahan-rini`;
                break;
            case 'clear':
                cliOutput.innerHTML = '';
                return;
            default:
                responseEl.innerHTML = `Command not recognized: '<span style="color:#ef4444">${escapeHtml(cmd)}</span>'. Type <span class="cmd-highlight">'help'</span> for command list.`;
        }

        cliOutput.appendChild(responseEl);
        // Scroll terminal to bottom
        const termBody = document.querySelector('.terminal-body');
        if (termBody) termBody.scrollTop = termBody.scrollHeight;
    }

    function escapeHtml(text) {
        return text.replace(/[&<>"']/g, function(m) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
        });
    }

    // ----------------------------------------------------------------------
    // 9. Resume Modal Handler
    // ----------------------------------------------------------------------
    const resumeModal = document.getElementById('resume-modal');
    const openResumeBtn = document.getElementById('open-resume-btn');
    const resumeModalClose = document.getElementById('resume-modal-close');
    const downloadCvTrigger = document.getElementById('download-cv-trigger');

    function openResumeModal() {
        if (resumeModal) {
            resumeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    if (openResumeBtn) {
        openResumeBtn.addEventListener('click', openResumeModal);
    }

    if (resumeModalClose) {
        resumeModalClose.addEventListener('click', () => {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                resumeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    if (downloadCvTrigger) {
        downloadCvTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Downloading Raisa_Jahan_Rini_Resume_CSE.pdf');
        });
    }

    // ----------------------------------------------------------------------
    // 10. Contact Form Logic
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const resetFormBtn = document.getElementById('reset-form-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Sending...</span>`;
            submitBtn.disabled = true;

            setTimeout(() => {
                contactForm.classList.add('hidden');
                formFeedback.classList.remove('hidden');
                submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>`;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1200);
        });
    }

    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', () => {
            formFeedback.classList.add('hidden');
            contactForm.classList.remove('hidden');
        });
    }

    // ----------------------------------------------------------------------
    // 11. Navbar Mobile Menu & Scroll Behavior
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button visibility
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        // ScrollSpy Active Link Update
        let currentSection = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.offsetHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSection = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
