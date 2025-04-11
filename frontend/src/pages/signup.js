// Page d'inscription
function renderSignupPage(container) {
    container.innerHTML = `
        <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <a href="/" class="flex justify-center">
                    <h2 class="text-center text-3xl font-extrabold text-indigo-600">Smart Content Platform</h2>
                </a>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Créez votre compte</h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Ou
                    <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">connectez-vous à votre compte existant</a>
                </p>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form class="space-y-6" id="signup-form">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label>
                            <div class="mt-1">
                                <input id="name" name="name" type="text" autocomplete="name" required class="form-input" />
                            </div>
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required class="form-input" />
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="new-password" required class="form-input" />
                            </div>
                        </div>

                        <div>
                            <label for="password-confirm" class="block text-sm font-medium text-gray-700">Confirmez le mot de passe</label>
                            <div class="mt-1">
                                <input id="password-confirm" name="password-confirm" type="password" autocomplete="new-password" required class="form-input" />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input id="terms" name="terms" type="checkbox" required class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label for="terms" class="ml-2 block text-sm text-gray-900">
                                J'accepte les <a href="/terms" class="text-indigo-600 hover:text-indigo-500">conditions d'utilisation</a> et la <a href="/privacy" class="text-indigo-600 hover:text-indigo-500">politique de confidentialité</a>
                            </label>
                        </div>

                        <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Créer mon compte
                            </button>
                        </div>
                    </form>

                    <div class="mt-6">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-white text-gray-500">Ou continuer avec</span>
                            </div>
                        </div>

                        <div class="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                                    </svg>
                                </a>
                            </div>

                            <div>
                                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Gestion du formulaire d'inscription
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const passwordConfirm = document.getElementById('password-confirm').value;
            
            // Vérification des mots de passe
            if (password !== passwordConfirm) {
                alert('Les mots de passe ne correspondent pas.');
                return;
            }
            
            // Ici, nous simulons une inscription réussie
            console.log('Inscription avec:', { name, email });
            
            // Redirection vers le tableau de bord après inscription
            renderDashboard(container);
            window.history.pushState({}, '', '/dashboard');
        });
    }
}

// Export de la fonction
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderSignupPage };
}
