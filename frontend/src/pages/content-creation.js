// Page de création de contenu
function renderContentCreationPage(container) {
    container.innerHTML = `
        <div class="min-h-screen bg-gray-100">
            <header class="bg-white shadow">
                <div class="container-custom py-4">
                    <nav class="flex justify-between items-center">
                        <div class="flex items-center">
                            <a href="/dashboard" class="text-2xl font-bold text-indigo-600">Smart Content Platform</a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="relative">
                                <button class="flex items-center text-gray-700 focus:outline-none">
                                    <span class="mr-2">John Doe</span>
                                    <img src="https://via.placeholder.com/40" alt="Avatar" class="w-8 h-8 rounded-full">
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            
            <main class="container-custom py-6">
                <div class="flex flex-col md:flex-row">
                    <!-- Sidebar -->
                    <div class="w-full md:w-64 mb-6 md:mb-0">
                        <div class="bg-white rounded-lg shadow overflow-hidden">
                            <div class="p-4 border-b border-gray-200">
                                <h2 class="text-lg font-semibold">Menu</h2>
                            </div>
                            <nav class="p-2">
                                <a href="/dashboard" class="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">Tableau de bord</a>
                                <a href="/create" class="block px-4 py-2 rounded-md bg-indigo-50 text-indigo-700 font-medium mt-1">Créer du contenu</a>
                                <a href="/history" class="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 mt-1">Historique</a>
                                <a href="/account" class="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 mt-1">Mon compte</a>
                                <a href="/subscription" class="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 mt-1">Abonnement</a>
                            </nav>
                        </div>
                    </div>
                    
                    <!-- Content -->
                    <div class="md:ml-6 flex-1">
                        <div class="bg-white rounded-lg shadow p-6">
                            <h1 class="text-2xl font-bold mb-6">Créer du contenu</h1>
                            
                            <div id="content-creation-form">
                                <!-- Étape 1: Choix de la plateforme -->
                                <div id="step-1" class="fade-in">
                                    <h2 class="text-xl font-semibold mb-4">Étape 1: Choisissez une plateforme</h2>
                                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                                        <button class="platform-btn p-4 border rounded-lg hover:border-indigo-500 hover:shadow-md transition-all text-center" data-platform="blog">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                            <span class="font-medium">Blog</span>
                                        </button>
                                        
                                        <button class="platform-btn p-4 border rounded-lg hover:border-indigo-500 hover:shadow-md transition-all text-center" data-platform="linkedin">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span class="font-medium">LinkedIn</span>
                                        </button>
                                        
                                        <button class="platform-btn p-4 border rounded-lg hover:border-indigo-500 hover:shadow-md transition-all text-center" data-platform="instagram">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span class="font-medium">Instagram</span>
                                        </button>
                                        
                                        <button class="platform-btn p-4 border rounded-lg hover:border-indigo-500 hover:shadow-md transition-all text-center" data-platform="tiktok">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <span class="font-medium">TikTok</span>
                                        </button>
                                        
                                        <button class="platform-btn p-4 border rounded-lg hover:border-indigo-500 hover:shadow-md transition-all text-center" data-platform="twitter">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                            <span class="font-medium">Twitter</span>
                                        </button>
                                        
                                        <button class="platform-btn p-4 border rounded-lg hover:border-indigo-500 hover:shadow-md transition-all text-center" data-platform="facebook">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span class="font-medium">Facebook</span>
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- Étape 2: Formulaire de génération -->
                                <div id="step-2" class="hidden fade-in">
                                    <div class="flex items-center mb-6">
                                        <button id="back-to-step-1" class="mr-4 text-indigo-600 hover:text-indigo-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <h2 class="text-xl font-semibold">Étape 2: Informations pour <span id="selected-platform-name">la plateforme</span></h2>
                                    </div>
                                    
                                    <form id="generation-form" class="space-y-6">
                                        <div>
                                            <label for="topic" class="block text-sm font-medium text-gray-700">Thème ou sujet</label>
                                            <div class="mt-1">
                                                <input type="text" id="topic" name="topic" class="form-input" placeholder="Ex: Marketing digital, Développement personnel, Cuisine..." required />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label for="keywords" class="block text-sm font-medium text-gray-700">Mots-clés (séparés par des virgules)</label>
                                            <div class="mt-1">
                                                <input type="text" id="keywords" name="keywords" class="form-input" placeholder="Ex: innovation, stratégie, croissance..." />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label for="tone" class="block text-sm font-medium text-gray-700">Ton</label>
                                            <div class="mt-1">
                                                <select id="tone" name="tone" class="form-input">
                                                    <option value="professional">Professionnel</option>
                                                    <option value="casual">Décontracté</option>
                                                    <option value="friendly">Amical</option>
                                                    <option value="humorous">Humoristique</option>
                                                    <option value="formal">Formel</option>
                                                    <option value="inspirational">Inspirant</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label for="additional-info" class="block text-sm font-medium text-gray-700">Informations supplémentaires (optionnel)</label>
                                            <div class="mt-1">
                                                <textarea id="additional-info" name="additional-info" rows="3" class="form-input" placeholder="Précisez vos attentes, contraintes ou toute autre information utile..."></textarea>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Générer le contenu
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                
                                <!-- Étape 3: Génération en cours -->
                                <div id="step-3" class="hidden fade-in text-center py-10">
                                    <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 mx-auto mb-6"></div>
                                    <h2 class="text-xl font-semibold mb-2">Génération en cours...</h2>
                                    <p class="text-gray-600 mb-4">Notre IA travaille pour créer votre contenu optimisé.</p>
                                    <div class="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2.5">
                                        <div id="progress-bar" class="bg-indigo-600 h-2.5 rounded-full" style="width: 0%"></div>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-500">Cela peut prendre quelques secondes.</p>
                                </div>
                                
                                <!-- Étape 4: Résultat -->
                                <div id="step-4" class="hidden fade-in">
                                    <div class="flex items-center justify-between mb-6">
                                        <h2 class="text-xl font-semibold">Votre contenu est prêt !</h2>
                                        <button id="new-generation" class="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                                            </svg>
                                            Nouvelle génération
                                        </button>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-6 rounded-lg border mb-6">
                                        <div id="generated-content" class="prose max-w-none">
                                            <!-- Le contenu généré sera inséré ici -->
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-wrap gap-3">
                                        <button id="copy-content" class="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                            Copier
                                        </button>
                                        
                                        <button id="edit-content" class="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Modifier
                                        </button>
                                        
                                        <button id="save-content" class="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            Sauvegarder
                                        </button>
                                        
                                        <button id="regenerate-content" class="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            Régénérer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `;

    // Gestion des étapes de création de contenu
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    const step4 = document.getElementById('step-4');
    const platformButtons = document.querySelectorAll('.platform-btn');
    const backToStep1Button = document.getElementById('back-to-step-1');
    const selectedPlatformName = document.getElementById('selected-platform-name');
    const generationForm = document.getElementById('generation-form');
    const progressBar = document.getElementById('progress-bar');
    const newGenerationButton = document.getElementById('new-generation');
    const copyContentButton = document.getElementById('copy-content');
    const editContentButton = document.getElementById('edit-content');
    const saveContentButton = document.getElementById('save-content');
    const regenerateContentButton = document.getElementById('regenerate-content');
    const generatedContent = document.getElementById('generated-content');

    // Sélection de la plateforme (Étape 1 -> Étape 2)
    platformButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            selectedPlatformName.textContent = this.querySelector('span').textContent;
            
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
        });
    });

    // Retour à l'étape 1
    if (backToStep1Button) {
        backToStep1Button.addEventListener('click', function() {
            step2.classList.add('hidden');
            step1.classList.remove('hidden');
        });
    }

    // Soumission du formulaire (Étape 2 -> Étape 3)
    if (generationForm) {
        generationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            step2.classList.add('hidden');
            step3.classList.remove('hidden');
            
            // Simulation de la progression
            let progress = 0;
            const interval = setInterval(function() {
                progress += 5;
                progressBar.style.width = progress + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    
                    // Après un court délai, afficher le résultat
                    setTimeout(function() {
                        step3.classList.add('hidden');
                        step4.classList.remove('hidden');
                        
                        // Exemple de contenu généré
                        const platform = selectedPlatformName.textContent;
                        const topic = document.getElementById('topic').value;
                        
                        // Contenu généré simulé
                        generateSampleContent(platform, topic);
                    }, 500);
                }
            }, 100);
        });
    }

    // Nouvelle génération
    if (newGenerationButton) {
        newGenerationButton.addEventListener('click', function() {
            step4.classList.add('hidden');
            step1.classList.remove('hidden');
        });
    }

    // Copier le contenu
    if (copyContentButton) {
        copyContentButton.addEventListener('click', function() {
            const content = generatedContent.innerText;
            navigator.clipboard.writeText(content).then(function() {
                alert('Contenu copié dans le presse-papiers !');
            });
        });
    }

    // Fonction pour générer un exemple de contenu
    function generateSampleContent(platform, topic) {
        let content = '';
        
        switch (platform.toLowerCase()) {
            case 'blog':
                content = `
                    <h2>10 Stratégies Innovantes pour Réussir dans le ${topic}</h2>
                    
                    <p>Dans un monde en constante évolution, le ${topic} continue de transformer la façon dont les entreprises interagissent avec leurs clients. Que vous soyez un débutant ou un expert chevronné, ces stratégies vous aideront à rester en tête de la concurrence.</p>
                    
                    <h3>1. Adoptez une approche centrée sur le client</h3>
                    <p>Les entreprises qui réussissent dans le ${topic} comprennent que tout commence par une compréhension approfondie des besoins et des désirs de leurs clients. Prenez le temps d'écouter, d'analyser les données et d'adapter votre approche en conséquence.</p>
                    
                    <h3>2. Intégrez l'intelligence artificielle</h3>
                    <p>L'IA n'est plus réservée aux grandes entreprises. Des outils accessibles permettent désormais à toutes les organisations d'optimiser leurs processus, de personnaliser l'expérience client et d'obtenir des insights précieux.</p>
                    
                    <h3>3. Créez du contenu de valeur</h3>
                    <p>Le contenu reste roi dans le domaine du ${topic}. Concentrez-vous sur la création de contenu qui éduque, inspire ou résout des problèmes spécifiques pour votre audience.</p>
                `;
                break;
                
            case 'linkedin':
                content = `
                    <p>🚀 <strong>3 tendances incontournables dans le ${topic} pour 2025</strong></p>
                    
                    <p>Après avoir analysé les données de plus de 500 entreprises leaders, j'ai identifié les stratégies qui font vraiment la différence :</p>
                    
                    <p>1️⃣ L'hyperpersonnalisation devient la norme - 78% des consommateurs s'attendent désormais à une expérience entièrement adaptée à leurs besoins</p>
                    
                    <p>2️⃣ L'intégration de l'IA conversationnelle - Les entreprises qui l'ont adoptée ont vu leur taux de conversion augmenter de 34%</p>
                    
                    <p>3️⃣ La transparence comme valeur fondamentale - 92% des millennials sont plus fidèles aux marques qui démontrent une transparence totale</p>
                    
                    <p>Quelle tendance vous semble la plus prometteuse pour votre secteur ? Partagez votre avis en commentaire 👇</p>
                    
                    <p>#${topic.replace(/\s+/g, '')} #Innovation #Stratégie</p>
                `;
                break;
                
            case 'instagram':
                content = `
                    <p>✨ <strong>Transformez votre approche du ${topic} avec ces 5 astuces que les experts ne partagent pas !</strong> ✨</p>
                    
                    <p>Swipez pour découvrir comment j'ai multiplié mes résultats par 3 en seulement 2 mois ! 👉</p>
                    
                    <p>🔥 Astuce #1 : Commencez par définir votre "pourquoi" avant votre "comment"</p>
                    <p>🔥 Astuce #2 : Utilisez la technique du 80/20 pour identifier vos actions à fort impact</p>
                    <p>🔥 Astuce #3 : Créez un système plutôt qu'un simple objectif</p>
                    
                    <p>Enregistrez ce post pour y revenir plus tard ! Et dites-moi en commentaire quelle astuce vous allez appliquer dès aujourd'hui 💬</p>
                    
                    <p>#${topic.replace(/\s+/g, '')} #Croissance #Conseils #Motivation</p>
                `;
                break;
                
            default:
                content = `
                    <h3>Contenu optimisé pour ${platform} sur le thème du ${topic}</h3>
                    
                    <p>Voici un exemple de contenu généré pour la plateforme ${platform} sur le thème que vous avez choisi.</p>
                    
                    <p>Ce contenu serait normalement optimisé selon les meilleures pratiques de ${platform}, avec le ton approprié et le format idéal pour maximiser l'engagement.</p>
                    
                    <p>Vous pouvez maintenant copier ce contenu, le modifier selon vos besoins, ou demander une nouvelle génération.</p>
                `;
        }
        
        generatedContent.innerHTML = content;
    }
}

// Export de la fonction
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderContentCreationPage };
}
