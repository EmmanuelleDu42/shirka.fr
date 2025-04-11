// Smart Content Platform - Script principal
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de l'application
    initApp();
});

// Fonction d'initialisation de l'application
function initApp() {
    // Récupération de l'élément racine
    const root = document.getElementById('root');
    
    // Vérification si l'utilisateur est connecté (à implémenter avec Firebase Auth)
    const isLoggedIn = false; // Pour l'instant, on considère que l'utilisateur n'est pas connecté
    
    // Affichage de la page appropriée
    if (isLoggedIn) {
        renderDashboard(root);
    } else {
        renderHomePage(root);
    }
    
    // Initialisation des écouteurs d'événements
    initEventListeners();
}

// Fonction pour afficher la page d'accueil
function renderHomePage(container) {
    container.innerHTML = `
        <header class="bg-white shadow-sm">
            <div class="container-custom py-4">
                <nav class="flex justify-between items-center">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-indigo-600">Smart Content Platform</a>
                    </div>
                    <div class="hidden md:flex space-x-6">
                        <a href="#features" class="text-gray-600 hover:text-indigo-600">Fonctionnalités</a>
                        <a href="#pricing" class="text-gray-600 hover:text-indigo-600">Tarifs</a>
                        <a href="#faq" class="text-gray-600 hover:text-indigo-600">FAQ</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/login" class="btn btn-outline">Se connecter</a>
                        <a href="/signup" class="btn btn-primary">Essai gratuit</a>
                    </div>
                </nav>
            </div>
        </header>
        
        <main>
            <!-- Section Hero -->
            <section class="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <div class="container-custom">
                    <div class="max-w-3xl mx-auto text-center">
                        <h1 class="text-4xl md:text-5xl font-bold mb-6">Créez du contenu captivant avec l'IA</h1>
                        <p class="text-xl mb-8">Générez du contenu optimisé pour toutes vos plateformes en quelques clics grâce à notre technologie d'intelligence artificielle avancée.</p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/signup" class="btn bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg">Commencer gratuitement</a>
                            <a href="#pricing" class="btn bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg">Découvrir nos forfaits</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Section Fonctionnalités -->
            <section id="features" class="py-20 bg-white">
                <div class="container-custom">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl font-bold mb-4">Fonctionnalités principales</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Notre plateforme vous offre tous les outils nécessaires pour créer du contenu de qualité pour toutes vos plateformes.</p>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="card p-6">
                            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Génération intelligente</h3>
                            <p class="text-gray-600">Notre IA analyse votre thématique et génère du contenu pertinent et engageant adapté à votre audience.</p>
                        </div>
                        
                        <div class="card p-6">
                            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Multi-plateformes</h3>
                            <p class="text-gray-600">Créez du contenu optimisé pour différentes plateformes : Blog, LinkedIn, Instagram, TikTok et bien plus.</p>
                        </div>
                        
                        <div class="card p-6">
                            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Gain de temps</h3>
                            <p class="text-gray-600">Réduisez considérablement le temps passé à créer du contenu et concentrez-vous sur votre stratégie.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Section Tarifs -->
            <section id="pricing" class="py-20 bg-gray-50">
                <div class="container-custom">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl font-bold mb-4">Nos forfaits</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Choisissez le forfait qui correspond le mieux à vos besoins.</p>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <!-- Forfait Découverte -->
                        <div class="card p-6 border-t-4 border-gray-400 hover:shadow-lg transition-shadow">
                            <h3 class="text-xl font-bold mb-2">Découverte</h3>
                            <div class="mb-4">
                                <span class="text-4xl font-bold">0€</span>
                                <span class="text-gray-600">/mois</span>
                            </div>
                            <p class="text-gray-600 mb-6">Parfait pour découvrir notre plateforme.</p>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    5 générations par mois
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    2 plateformes
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Historique limité (7 jours)
                                </li>
                            </ul>
                            <a href="/signup" class="btn btn-outline w-full text-center">Commencer gratuitement</a>
                        </div>
                        
                        <!-- Forfait Créateur -->
                        <div class="card p-6 border-t-4 border-indigo-600 transform scale-105 shadow-lg">
                            <div class="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">Populaire</div>
                            <h3 class="text-xl font-bold mb-2">Créateur</h3>
                            <div class="mb-4">
                                <span class="text-4xl font-bold">29€</span>
                                <span class="text-gray-600">/mois</span>
                            </div>
                            <p class="text-gray-600 mb-6">Idéal pour les créateurs de contenu réguliers.</p>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    50 générations par mois
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Toutes les plateformes
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Historique illimité
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Support prioritaire
                                </li>
                            </ul>
                            <a href="/signup" class="btn btn-primary w-full text-center">Choisir ce forfait</a>
                        </div>
                        
                        <!-- Forfait Pro -->
                        <div class="card p-6 border-t-4 border-purple-600 hover:shadow-lg transition-shadow">
                            <h3 class="text-xl font-bold mb-2">Pro</h3>
                            <div class="mb-4">
                                <span class="text-4xl font-bold">79€</span>
                                <span class="text-gray-600">/mois</span>
                            </div>
                            <p class="text-gray-600 mb-6">Pour les professionnels et les équipes.</p>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Générations illimitées
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Toutes les plateformes
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Historique illimité
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Support dédié
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    API d'accès
                                </li>
                            </ul>
                            <a href="/signup" class="btn btn-outline w-full text-center">Choisir ce forfait</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Section FAQ -->
            <section id="faq" class="py-20 bg-white">
                <div class="container-custom">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl font-bold mb-4">Questions fréquentes</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Tout ce que vous devez savoir sur notre plateforme.</p>
                    </div>
                    
                    <div class="max-w-3xl mx-auto">
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold mb-2">Comment fonctionne la génération de contenu ?</h3>
                            <p class="text-gray-600">Notre plateforme utilise des algorithmes d'intelligence artificielle avancés pour analyser votre thématique et générer du contenu pertinent et engageant adapté à la plateforme de votre choix.</p>
                        </div>
                        
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold mb-2">Puis-je modifier le contenu généré ?</h3>
                            <p class="text-gray-600">Absolument ! Vous pouvez modifier, ajuster et personnaliser le contenu généré selon vos besoins avant de le publier sur vos plateformes.</p>
                        </div>
                        
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold mb-2">Quelles plateformes sont supportées ?</h3>
                            <p class="text-gray-600">Nous supportons actuellement la génération de contenu pour les blogs, LinkedIn, Instagram, TikTok, Twitter, Facebook et YouTube. Nous ajoutons régulièrement de nouvelles plateformes.</p>
                        </div>
                        
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold mb-2">Puis-je changer de forfait à tout moment ?</h3>
                            <p class="text-gray-600">Oui, vous pouvez passer à un forfait supérieur ou inférieur à tout moment. Les changements prendront effet à la prochaine période de facturation.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Section CTA -->
            <section class="py-20 bg-indigo-600 text-white">
                <div class="container-custom text-center">
                    <h2 class="text-3xl font-bold mb-4">Prêt à révolutionner votre création de contenu ?</h2>
                    <p class="text-xl mb-8 max-w-3xl mx-auto">Rejoignez des milliers d'utilisateurs qui gagnent du temps et améliorent leur présence en ligne grâce à Smart Content Platform.</p>
                    <a href="/signup" class="btn bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg">Commencer gratuitement</a>
                </div>
            </section>
        </main>
        
        <footer class="bg-gray-800 text-white py-12">
            <div class="container-custom">
                <div class="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">Smart Content Platform</h3>
                        <p class="text-gray-400">La solution intelligente pour créer du contenu engageant pour toutes vos plateformes.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Liens rapides</h4>
                        <ul class="space-y-2">
                            <li><a href="#features" class="text-gray-400 hover:text-white">Fonctionnalités</a></li>
                            <li><a href="#pricing" class="text-gray-400 hover:text-white">Tarifs</a></li>
                            <li><a href="#faq" class="text-gray-400 hover:text-white">FAQ</a></li>
                            <li><a href="/contact" class="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Légal</h4>
                        <ul class="space-y-2">
                            <li><a href="/terms" class="text-gray-400 hover:text-white">Conditions d'utilisation</a></li>
                            <li><a href="/privacy" class="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
                            <li><a href="/cookies" class="text-gray-400 hover:text-white">Politique de cookies</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Suivez-nous</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white">
                                <span class="sr-only">Facebook</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <span class="sr-only">Twitter</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <span class="sr-only">Instagram</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <span class="sr-only">LinkedIn</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; 2025 Smart Content Platform. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    `;
}

// Fonction pour afficher le tableau de bord (à implémenter)
function renderDashboard(container) {
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
                                <a href="/dashboard" class="block px-4 py-2 rounded-md bg-indigo-50 text-indigo-700 font-medium">Tableau de bord</a>
                                <a href="/create" class="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 mt-1">Créer du contenu</a>
                                <a href="/history" class="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 mt-1">Historique</a>
                                <a href="/account" class="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 mt-1">Mon compte</a>
                                <a href="/subscription" class="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 mt-1">Abonnement</a>
                            </nav>
                        </div>
                    </div>
                    
                    <!-- Content -->
                    <div class="md:ml-6 flex-1">
                        <div class="bg-white rounded-lg shadow p-6">
                            <h1 class="text-2xl font-bold mb-6">Tableau de bord</h1>
                            
                            <!-- Stats -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div class="bg-indigo-50 rounded-lg p-4">
                                    <h3 class="text-indigo-700 font-semibold mb-2">Générations ce mois</h3>
                                    <p class="text-3xl font-bold">12 / 50</p>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 24%"></div>
                                    </div>
                                </div>
                                
                                <div class="bg-green-50 rounded-lg p-4">
                                    <h3 class="text-green-700 font-semibold mb-2">Contenu sauvegardé</h3>
                                    <p class="text-3xl font-bold">8</p>
                                </div>
                                
                                <div class="bg-purple-50 rounded-lg p-4">
                                    <h3 class="text-purple-700 font-semibold mb-2">Plateformes utilisées</h3>
                                    <p class="text-3xl font-bold">3</p>
                                </div>
                            </div>
                            
                            <!-- Recent Activity -->
                            <div>
                                <h2 class="text-xl font-semibold mb-4">Activité récente</h2>
                                <div class="border rounded-lg overflow-hidden">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plateforme</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thème</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10/04/2025</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LinkedIn</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Marketing digital</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3">Voir</a>
                                                    <a href="#" class="text-red-600 hover:text-red-900">Supprimer</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08/04/2025</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Blog</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Intelligence artificielle</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3">Voir</a>
                                                    <a href="#" class="text-red-600 hover:text-red-900">Supprimer</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05/04/2025</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Instagram</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bien-être</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3">Voir</a>
                                                    <a href="#" class="text-red-600 hover:text-red-900">Supprimer</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `;
}

// Initialisation des écouteurs d'événements
function initEventListeners() {
    // Navigation
    document.addEventListener('click', function(e) {
        // Gestion des liens de navigation
        if (e.target.tagName === 'A') {
            const href = e.target.getAttribute('href');
            
            // Si c'est un lien interne (commence par /)
            if (href && href.startsWith('/') && !href.startsWith('/#')) {
                e.preventDefault();
                
                // Gestion des différentes routes
                switch (href) {
                    case '/login':
                        renderLoginPage(document.getElementById('root'));
                        break;
                    case '/signup':
                        renderSignupPage(document.getElementById('root'));
                        break;
                    case '/dashboard':
                        renderDashboard(document.getElementById('root'));
                        break;
                    case '/create':
                        renderContentCreationPage(document.getElementById('root'));
                        break;
                    default:
                        // Par défaut, on reste sur la page d'accueil
                        renderHomePage(document.getElementById('root'));
                }
                
                // Mise à jour de l'URL sans rechargement de la page
                window.history.pushState({}, '', href);
            }
        }
    });
}

// Fonction pour afficher la page de connexion (à implémenter)
function renderLoginPage(container) {
    // À implémenter
    console.log('Page de connexion à implémenter');
}

// Fonction pour afficher la page d'inscription (à implémenter)
function renderSignupPage(container) {
    // À implémenter
    console.log('Page d\'inscription à implémenter');
}

// Fonction pour afficher la page de création de contenu (à implémenter)
function renderContentCreationPage(container) {
    // À implémenter
    console.log('Page de création de contenu à implémenter');
}
