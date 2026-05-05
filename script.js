const projects = [
    {
        id: 1,
        title: "Customer Age Identification Model",
        category: "computer-vision",
        categoryLabel: "Computer Vision",
        image: "assets/project-pictures/customerage.png",
        summary: "Developed a TensorFlow-based CNN to estimate customer age from facial images. Used image preprocessing, dimension optimization, and parameter tuning to improve accuracy while reducing training epochs. Implemented in Python, the model achieved a Mean Absolute Error (MAE) of 8.3 years on the test data.",
        overview: "This project focuses on developing a computer vision model capable of estimating a person's age from facial images using deep learning techniques. The goal was to evaluate whether a convolutional neural network trained with transfer learning could accurately predict real age based on visual facial features. The dataset consists of 7,591 labeled face images with ages ranging from 1 to 100 years old.",
        businessProblem: "Retail businesses need age-based customer segmentation for targeted marketing and personalized experiences. Manual age estimation is time-consuming, inconsistent, and impractical at scale.",
        methodology: `<strong>Exploratory Data Analysis:</strong> Analyzed 7,591 labeled facial images with no missing values. The age distribution spans a wide range from children to elderly individuals, slightly skewed toward younger ages (20-40). Verified image-label correspondence for dataset integrity.<br><br>
<strong>Data Pipeline and Preprocessing:</strong> Implemented efficient data loading using Keras ImageDataGenerator. Rescaled pixel values, resized images to 224Ã—224 (ResNet50 input), and split into 80/20 training/validation sets. Processed batches dynamically to manage memory efficiently.<br><br>
<strong>Model Architecture:</strong> Built transfer learning model using pretrained ResNet50 as frozen convolutional base. Added custom regression head to predict age from extracted features. ~262,000 trainable parameters adapted specifically for age prediction.<br><br>
<strong>Model Training:</strong> Trained with Mean Squared Error (MSE) loss, monitored Mean Absolute Error (MAE) as evaluation metric. Implemented early stopping to prevent overfitting, restoring best weights when validation MAE stopped improving.`,
        businessImpact: `Accurate age estimation from facial images enables retail businesses to:<br>
â€¢ Automate customer demographic segmentation at scale<br>
â€¢ Deliver personalized marketing based on visual characteristics<br>
â€¢ Improve customer experience through age-appropriate service delivery<br>
â€¢ Reduce manual effort while maintaining consistent age classification`,
        tools: ["Python", "Pandas", "TensorFlow", "Keras", "ResNet50", "Transfer Learning", "Computer Vision", "Deep Learning", "Image Processing", "Matplotlib", "Exploratory Data Analysis (EDA)"],
        result: "Mean Absolute Error (MAE): 8.91 years â€” achieving accurate age estimation suitable for retail customer analytics and segmentation.",
        dashboardPath: "https://lorena885.github.io/CustomerAgeIdentificationModel/",
        githubLink: "https://github.com/Lorena885/CustomerAgeIdentificationModel"
    },
    {
        id: 2,
        title: "Airport Taxi Demand Prediction Model",
        category: "forecasting",
        categoryLabel: "Forecasting",
        image: "assets/project-pictures/airport.png",
        summary: "Built and evaluated multiple regression models to forecast hourly airport taxi demand using Scikit-learn and statistical methods. Tuned hyperparameters and tested model variants with Python, Pandas, and Statsmodels to improve accuracy. The final model achieved a Root Mean Squared Error (RMSE) of 43.",
        overview: "This project focuses on predicting taxi demand in airports using time series forecasting techniques. The objective is to help a taxi company anticipate demand during peak hours and allocate drivers more efficiently, reducing passenger wait times and improving operational planning. The dataset contains historical records of taxi orders aggregated by time intervals.",
        businessProblem: "Airport taxi services need accurate demand forecasts to optimize driver allocation and reduce wait times. Inaccurate predictions lead to driver shortages during peak hours and wasted resources during low-demand periods.",
        methodology: `<strong>Data Preparation:</strong> Converted timestamp column to datetime format, set as time index, sorted chronologically, and aggregated into hourly demand intervals to capture meaningful demand patterns. This enabled proper time series analysis.<br><br>
<strong>Exploratory Time Series Analysis:</strong> Examined overall demand trends, hourly and daily fluctuations, and seasonal patterns. Visualizations revealed clear periodic fluctuations with increased demand during certain hours, indicating that temporal features and lagged demand values could improve predictions.<br><br>
<strong>Feature Engineering:</strong> Created time-based features including hour of day, day of week, lag features for previous demand periods, and rolling mean values to capture short-term trends. These features allowed the model to incorporate temporal dependencies and seasonal behavior.<br><br>
<strong>Model Development:</strong> Split data chronologically (preserving temporal order, ensuring future observations were never used to predict past values). Compared multiple regression-based models to predict taxi demand, evaluated using Root Mean Squared Error (RMSE).<br><br>
<strong>Model Evaluation:</strong> The final model demonstrated ability to capture temporal patterns in taxi demand, producing forecasts that closely followed real demand trends.`,
        businessImpact: `Accurate demand forecasting enables taxi companies to:<br>
â€¢ Improve driver allocation during peak hours<br>
â€¢ Reduce passenger wait times<br>
â€¢ Increase service efficiency<br>
â€¢ Optimize operational resources<br><br>
Companies can shift from reactive operations to data-driven demand planning.`,
        tools: ["Python", "Pandas", "NumPy", "Time Series Analysis", "Machine Learning", "Feature Engineering", "Scikit-learn", "Data Visualization", "Matplotlib", "Exploratory Data Analysis (EDA)"],
        result: "RMSE: 43 â€” actionable hourly predictions enabling accurate demand forecasting to optimize driver allocation and reduce customer wait times.",
        dashboardPath: "dashboards/taxi-demand/index.html",
        githubLink: "#"
    },
    {
        id: 3,
        title: "Oil Well Investment Prediction Model",
        category: "forecasting",
        categoryLabel: "Forecasting",
        image: "assets/project-pictures/oil.png",
        summary: "Developed a regression model to estimate oil production across 200 wells using Scikit-learn and exploratory data analysis. Performed regional profitability and risk assessment with statistical and bootstrap methods to guide investment decisions, identifying the optimal region based on expected profit.",
        overview: "This project simulates a real-world oil drilling investment decision using machine learning and statistical risk analysis. The objective was to identify the most profitable region to develop 200 new oil wells while minimizing the risk of financial losses. Dataset includes 100,000 wells per region with geological characteristics and estimated oil reserves.",
        businessProblem: "Oil companies need data-driven approaches to evaluate drilling locations and allocate capital efficiently. With a $100M budget for 200 wells and $4.5/barrel pricing, each well must generate at least 111.1 thousand barrels to break even.",
        methodology: `<strong>Data Exploration and Preparation:</strong> Loaded and explored datasets for three regions. Each contained 5 columns: id, three geological features (f0, f1, f2), and target variable (product). Performed initial EDA to inspect data types, detect missing values, and analyze reserve distribution. Found clean datasets with no duplicates.<br><br>
<strong>Machine Learning Model:</strong> Trained Linear Regression models per region using 75/25 train/validation split. Evaluated using RMSE. Region 0: RMSE ~37.6, high variability. Region 1: RMSE â‰ˆ 0.89, extremely accurate. Region 2: RMSE ~40, highest mean but highest uncertainty.<br><br>
<strong>Economic Feasibility Analysis:</strong> Calculated profit by ranking wells by predicted reserves, selecting top 200, computing revenue from real reserves, and subtracting investment budget. Initial results suggested Region 0 produced highest potential profit, but profitability alone doesn't capture investment risk.<br><br>
<strong>Risk Analysis Using Bootstrapping:</strong> Implemented 1000-iteration bootstrap simulation. In each iteration: randomly select 500 wells with replacement, choose top 200 by predicted reserves, compute revenue and profit. Calculated average expected profit, 95% confidence interval, and probability of financial loss.`,
        businessImpact: `The analysis enabled data-driven investment decisions by:<br>
â€¢ Quantifying expected profit per region with statistical confidence<br>
â€¢ Assessing investment risk through probability of loss calculations<br>
â€¢ Identifying Region 1 as optimal despite lower average reserves due to lowest risk profile (0.7% vs 6.9% for other regions)<br>
â€¢ Meeting business requirement of maintaining loss risk below 2.5%`,
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Linear Regression", "Bootstrap", "Statistical Analysis", "Data Visualization", "Exploratory Data Analysis (EDA)"],
        result: "Identified Region 1 as optimal investment location â€” lowest risk (0.7%) while meeting business constraints, providing actionable recommendations for $100M capital allocation.",
        dashboardPath: "dashboards/oil-well/index.html",
        githubLink: "#"
    },
    {
        id: 4,
        title: "Telecom Customer Churn Prediction",
        category: "ml",
        categoryLabel: "Machine Learning",
        image: "assets/project-pictures/telecomunications.png",
        summary: "Machine learning project focused on predicting customer churn for a telecommunications company using behavioral, demographic, and service usage data. Multiple datasets were merged and analyzed to identify patterns associated with customer cancellations.",
        overview: "This project focuses on building a machine learning model to predict customer churn for a telecommunications company. The goal was to identify customers likely to cancel their services, enabling proactive retention strategies and reducing revenue loss. The dataset contains customer behavior, service usage, demographics, and contract details across multiple relational datasets.",
        businessProblem: "Customer churn significantly impacts telecom revenue. Early identification enables proactive retention measures, reducing the cost of acquiring new customers versus retaining existing ones.",
        methodology: `<strong>Data Preparation and Cleaning:</strong> Merged multiple datasets containing customer information into a unified dataframe. Inspected data types, corrected formatting inconsistencies, handled missing values, and identified categorical variables. Converted churn indicator to binary classification target and encoded categorical features for ML algorithms.<br><br>
<strong>Exploratory Data Analysis:</strong> Analyzed customer tenure distribution, contract types, internet service types, monthly/total charges, and demographic attributes. Key findings: month-to-month contracts, higher monthly charges, and shorter tenure correlated with higher churn. Long-term contracts and bundled services reduced churn probability.<br><br>
<strong>Feature Engineering:</strong> Created new numerical features from existing variables, applied appropriate encoding techniques for categorical variables, standardized numerical variables where required, and removed redundant or non-informative features to improve model performance.<br><br>
<strong>Model Development:</strong> Framed as binary classification problem. Evaluated multiple machine learning models using Scikit-learn. Focused on metrics relevant to churn prediction: Accuracy, Precision, Recall, F1-score, and ROC-AUC. Prioritized recall and ROC-AUC for correctly identifying potential churn customers.<br><br>
<strong>Model Evaluation:</strong> Best-performing model demonstrated strong predictive capability in distinguishing active vs churned customers. Feature importance analysis revealed contract type, tenure, monthly charges, and internet service type as most influential predictors.`,
        businessImpact: `Accurately predicting churn enables the company to:<br>
â€¢ Identify customers at risk of leaving before they cancel<br>
â€¢ Deploy targeted retention campaigns with personalized offers<br>
â€¢ Improve long-term customer lifetime value<br>
â€¢ Reduce revenue losses associated with customer turnover<br><br>
Shift from reactive churn management to proactive retention strategies.`,
        tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Classification Models", "Data Preprocessing", "Feature Engineering", "Matplotlib", "Seaborn", "Exploratory Data Analysis (EDA)"],
        result: "Actionable customer risk segmentation to support targeted retention interventions with identified key churn predictors.",
        dashboardPath: "dashboards/telecom-churn/index.html",
        githubLink: "#"
    },
    {
        id: 5,
        title: "Video Game Sales Analysis",
        category: "analytics",
        categoryLabel: "Analytics",
        image: "assets/project-pictures/videogame.png",
        summary: "Exploratory data analysis of historical video game sales to identify patterns that influence commercial success. The project examines platform life cycles, genre performance, review impact, and regional market differences to support data-driven decisions for game retail strategy.",
        overview: "Conducted comprehensive exploratory data analysis on video game sales to uncover patterns, trends, and insights for game development and retail strategies.",
        businessProblem: "Game publishers need data-driven insights to optimize portfolios, marketing, and inventory decisions.",
        methodology: "Analyzed platform life cycles, genre performance, review impact, and regional behavior. Statistical analysis to identify success factors.",
        tools: ["Python", "Pandas", "NumPy", "Data Analysis", "Data Cleaning", "Exploratory Data Analysis (EDA)", "Matplotlib", "Seaborn", "Statistical Analysis", "Data Visualization"],
        result: "Data-driven insights for game retail strategy, including platform recommendations and genre performance analysis.",
        dashboardPath: "dashboards/video-game-sales/index.html",
        githubLink: "#"
    },
    {
        id: 6,
        title: "Bank Customer Churn â€” Beta Bank",
        category: "ml",
        categoryLabel: "Machine Learning",
        image: "assets/project-pictures/bankcustomer.png",
        summary: "ML model to predict customer churn for a retail bank. Handled class imbalance using oversampling, undersampling, and class weights. Best model: Random Forest with F1 = 0.59 and AUC-ROC = 0.85. Outputs a prioritised list of at-risk customers (HIGH/MEDIUM/LOW) to support retention campaigns.",
        overview: "Built a complete churn prediction solution addressing class imbalance. Produced an actionable prioritized customer list for retention teams.",
        businessProblem: "Banking institutions face revenue loss from churn. Early identification enables proactive retention measures.",
        methodology: "Handled class imbalance using SMOTE, undersampling, and class weights. Compared Random Forest and other models. Selected based on F1 and AUC-ROC.",
        tools: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Random Forest", "Classification", "F1 Score", "AUC-ROC", "Class Imbalance", "Feature Engineering", "Data Preprocessing", "Exploratory Data Analysis (EDA)", "Matplotlib", "Seaborn"],
        result: "F1 Score: 0.59 | AUC-ROC: 0.85 â€” prioritized HIGH / MEDIUM / LOW risk customer list.",
        dashboardPath: "https://lorena885.github.io/beta-bank-churn/",
        githubLink: "https://github.com/Lorena885/beta-bank-churn"
    },
    {
        id: 7,
        title: "US Second-Hand Car Listings Analysis",
        category: "analytics",
        categoryLabel: "Analytics",
        image: "assets/project-pictures/car-listings.png",
        summary: "Built an interactive Streamlit and Plotly dashboard to explore 26,470 used car listings across the United States. The app helps buyers, sellers, and analysts understand pricing patterns, mileage trends, condition effects, and vehicle type composition through filters, KPI metrics, and dynamic charts.",
        overview: "This project analyzes the US second-hand car market using an interactive dashboard built with Python, Streamlit, Plotly, and Pandas. Users can filter listings by vehicle condition, type, model year, and odometer reading to explore how price, mileage, and condition interact across the market.",
        businessProblem: "The second-hand car market is highly fragmented: prices vary significantly based on mileage, condition, vehicle type, and model year. Without a visual way to explore these variables together, buyers and sellers struggle to make informed pricing and purchasing decisions.",
        methodology: `<strong>Data Preparation:</strong> Loaded and explored 26,470 US vehicle listings, focusing on price, odometer readings, condition, model year, and vehicle type. Prepared the dataset for interactive filtering and visual exploration.<br><br>
<strong>Dashboard Development:</strong> Built a Streamlit app with sidebar filters for condition, vehicle type, model year range, and maximum odometer reading. Added KPI cards for total listings, average price, average odometer, and most common condition.<br><br>
<strong>Visual Analysis:</strong> Created Plotly charts for odometer distribution, price vs odometer by condition, listings by vehicle type, and price distribution by condition. Included an expandable filtered data table for deeper inspection.<br><br>
<strong>Deployment:</strong> Published the interactive dashboard on Render so stakeholders can explore the market from a browser without running Python locally.`,
        businessImpact: `The dashboard supports better second-hand car decisions by:<br>
Making price and mileage patterns easy to compare across market segments<br>
Showing how condition changes expected asking prices<br>
Highlighting SUV, truck, and sedan dominance in listing volume<br>
Giving sellers and buyers a quick way to benchmark listings against similar vehicles`,
        tools: ["Python", "Pandas", "Streamlit", "Plotly", "Data Visualization", "Exploratory Data Analysis (EDA)", "Dashboard Design", "Render"],
        result: "Analyzed 26,470 listings with an average price of $14,749 and average odometer of 83,788 km, identifying mileage, condition, and vehicle type as key drivers of second-hand car market behavior.",
        dashboardPath: "https://proyecto-sprint7-0nrf.onrender.com",
        githubLink: "https://github.com/Lorena885/Analysis-of-car-adds",
        liveAppLink: "https://proyecto-sprint7-0nrf.onrender.com"
    }
];

const categoryIcons = {
    'ml': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14v2a4 4 0 0 1-8 0v-2"/><line x1="12" y1="14" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>',
    'analytics': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    'forecasting': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    'computer-vision': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
};

document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    initNavigation();
    initFilterButtons();
    initModal();
    initBackToTop();
    initScrollReveal();
});

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    const shortResults = {
        1: 'MAE: 8.3 years',
        2: 'RMSE: 43',
        3: 'Optimal Region Found',
        4: 'Churn Patterns Identified',
        5: 'Sales Trends Uncovered',
        6: 'F1: 0.59 | AUC: 0.85',
        7: '26,470 Listings'
    };
    
    grid.innerHTML = projects.map(project => `
        <article class="project-card scroll-reveal" data-category="${project.category}" data-id="${project.id}">
            <div class="project-info">
                <span class="project-category">${project.categoryLabel}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-summary">${project.summary}</p>
                <div class="project-result">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    ${shortResults[project.id] || 'View Results'}
                </div>
                <div class="project-tags">
                    ${project.tools.map(tool => `<span class="project-tag">${tool}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <span class="project-cta" data-project-id="${project.id}">
                        View Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </span>
                    ${project.githubLink && project.githubLink !== '#' ? `
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-github-link" aria-label="View on GitHub">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    ` : ''}
                </div>
            </div>
            <div class="project-preview">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : (categoryIcons[project.category] || categoryIcons['analytics'])}
            </div>
        </article>
    `).join('');
    
    grid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.project-github-link')) return;
            openProjectModal(parseInt(card.dataset.id));
        });
        
        const githubLink = card.querySelector('.project-github-link');
        if (githubLink) {
            githubLink.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    });
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    });
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const applyFilter = (filter) => {
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
            }
        });
    };
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            applyFilter(btn.dataset.filter);
        });
    });

    const activeFilter = document.querySelector('.filter-btn.active');
    applyFilter(activeFilter ? activeFilter.dataset.filter : 'ml');
}

function initModal() {
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    function closeModal() {
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
        
        const iframe = modalBody.querySelector('iframe');
        if (iframe) {
            iframe.src = '';
        }
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalGithubLink = document.getElementById('modalGithubLink');
    
    modalTitle.textContent = project.title;
    modalGithubLink.href = project.githubLink;
    modalGithubLink.style.display = project.githubLink && project.githubLink !== '#' ? 'flex' : 'none';
    const fullDashboardLink = project.liveAppLink || (project.dashboardPath && project.dashboardPath.startsWith('http') ? project.dashboardPath : '');
    
    modalBody.innerHTML = `
        <div class="modal-content-wrapper">
            <div class="modal-details">
                <div class="modal-section">
                    <h4 class="modal-section-title">The Problem</h4>
                    <p class="modal-section-text">${project.businessProblem}</p>
                </div>
                
                <div class="modal-section">
                    <h4 class="modal-section-title">What I Did</h4>
                    <p class="modal-section-text">${project.methodology}</p>
                </div>
                
                <div class="modal-section">
                    <h4 class="modal-section-title">Tools & Technologies</h4>
                    <div class="modal-tools">
                        ${project.tools.map(tool => `<span class="modal-tool">${tool}</span>`).join('')}
                    </div>
                </div>
                
                ${project.businessImpact ? `
                <div class="modal-section">
                    <h4 class="modal-section-title">Business Impact</h4>
                    <p class="modal-section-text">${project.businessImpact}</p>
                </div>
                ` : ''}
                
                <div class="modal-section">
                    <h4 class="modal-section-title">Result</h4>
                    <div class="modal-result">
                        <div class="modal-result-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"/>
                            </svg>
                        </div>
                        <div class="modal-result-content">
                            <p class="modal-result-text">${project.result}</p>
                        </div>
                    </div>
                </div>
                
                <div class="modal-section">
                    <div class="modal-links">
                        <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="modal-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View on GitHub
                        </a>
                        ${fullDashboardLink ? `
                        <a href="${fullDashboardLink}" target="_blank" rel="noopener noreferrer" class="modal-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            Live App
                        </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            
            <div class="modal-dashboard-panel">
                <div class="modal-dashboard-header">
                    <span class="modal-dashboard-title">Interactive Dashboard</span>
                    <div class="modal-dashboard-actions">
                        ${fullDashboardLink ? `
                        <a href="${fullDashboardLink}" target="_blank" rel="noopener noreferrer" class="modal-dashboard-link">
                            Open Full Dashboard
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </a>
                        ` : ''}
                        <span class="modal-dashboard-badge">Live Preview</span>
                    </div>
                </div>
                <div class="modal-iframe-container">
                    <iframe 
                        class="modal-iframe" 
                        src="${project.dashboardPath}" 
                        title="${project.title} Dashboard"
                        loading="lazy"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    ></iframe>
                    <div class="modal-iframe-placeholder" style="display: none;">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="3" y1="9" x2="21" y2="9"/>
                            <line x1="9" y1="21" x2="9" y2="9"/>
                        </svg>
                        <p>Dashboard file not yet available.<br><code>${project.dashboardPath}</code></p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open');
    
    modal.setAttribute('aria-hidden', 'false');
    modalClose.focus();
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const header = section.querySelector('.section-header');
        if (header) {
            observer.observe(header);
        }
    });
}

