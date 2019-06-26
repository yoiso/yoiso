'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">yuso documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DailyBalanceModule.html" data-type="entity-link">DailyBalanceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DailyBalanceModule-273d82fa2e7deb7f9c2a0ba0ebb58a7d"' : 'data-target="#xs-controllers-links-module-DailyBalanceModule-273d82fa2e7deb7f9c2a0ba0ebb58a7d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DailyBalanceModule-273d82fa2e7deb7f9c2a0ba0ebb58a7d"' :
                                            'id="xs-controllers-links-module-DailyBalanceModule-273d82fa2e7deb7f9c2a0ba0ebb58a7d"' }>
                                            <li class="link">
                                                <a href="controllers/DailyBalanceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DailyBalanceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DailyBalanceModule-273d82fa2e7deb7f9c2a0ba0ebb58a7d"' : 'data-target="#xs-injectables-links-module-DailyBalanceModule-273d82fa2e7deb7f9c2a0ba0ebb58a7d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DailyBalanceModule-273d82fa2e7deb7f9c2a0ba0ebb58a7d"' :
                                        'id="xs-injectables-links-module-DailyBalanceModule-273d82fa2e7deb7f9c2a0ba0ebb58a7d"' }>
                                        <li class="link">
                                            <a href="injectables/DailyBalanceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DailyBalanceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MeModule.html" data-type="entity-link">MeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MeModule-47e23b286f4dfb838931c586254f273e"' : 'data-target="#xs-controllers-links-module-MeModule-47e23b286f4dfb838931c586254f273e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MeModule-47e23b286f4dfb838931c586254f273e"' :
                                            'id="xs-controllers-links-module-MeModule-47e23b286f4dfb838931c586254f273e"' }>
                                            <li class="link">
                                                <a href="controllers/MeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MeModule-47e23b286f4dfb838931c586254f273e"' : 'data-target="#xs-injectables-links-module-MeModule-47e23b286f4dfb838931c586254f273e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MeModule-47e23b286f4dfb838931c586254f273e"' :
                                        'id="xs-injectables-links-module-MeModule-47e23b286f4dfb838931c586254f273e"' }>
                                        <li class="link">
                                            <a href="injectables/MeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Oauth2Module.html" data-type="entity-link">Oauth2Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-Oauth2Module-c0e71cb494781e0d147e04fbd5f5be12"' : 'data-target="#xs-controllers-links-module-Oauth2Module-c0e71cb494781e0d147e04fbd5f5be12"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-Oauth2Module-c0e71cb494781e0d147e04fbd5f5be12"' :
                                            'id="xs-controllers-links-module-Oauth2Module-c0e71cb494781e0d147e04fbd5f5be12"' }>
                                            <li class="link">
                                                <a href="controllers/PasswordController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PasswordController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Oauth2Module-c0e71cb494781e0d147e04fbd5f5be12"' : 'data-target="#xs-injectables-links-module-Oauth2Module-c0e71cb494781e0d147e04fbd5f5be12"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Oauth2Module-c0e71cb494781e0d147e04fbd5f5be12"' :
                                        'id="xs-injectables-links-module-Oauth2Module-c0e71cb494781e0d147e04fbd5f5be12"' }>
                                        <li class="link">
                                            <a href="injectables/Oauth2Service.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Oauth2Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-3ee65102443b8d3cb71db00126a5b13f"' : 'data-target="#xs-controllers-links-module-UserModule-3ee65102443b8d3cb71db00126a5b13f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-3ee65102443b8d3cb71db00126a5b13f"' :
                                            'id="xs-controllers-links-module-UserModule-3ee65102443b8d3cb71db00126a5b13f"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-3ee65102443b8d3cb71db00126a5b13f"' : 'data-target="#xs-injectables-links-module-UserModule-3ee65102443b8d3cb71db00126a5b13f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-3ee65102443b8d3cb71db00126a5b13f"' :
                                        'id="xs-injectables-links-module-UserModule-3ee65102443b8d3cb71db00126a5b13f"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessToken.html" data-type="entity-link">AccessToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountVerification.html" data-type="entity-link">AccountVerification</a>
                            </li>
                            <li class="link">
                                <a href="classes/changeDefaultValueOnIsVerified1560422912373.html" data-type="entity-link">changeDefaultValueOnIsVerified1560422912373</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link">Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/createAccountVerificationTable1561015030859.html" data-type="entity-link">createAccountVerificationTable1561015030859</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDailyBalanceDto.html" data-type="entity-link">CreateDailyBalanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/createDailyBalanceIndex1561539612695.html" data-type="entity-link">createDailyBalanceIndex1561539612695</a>
                            </li>
                            <li class="link">
                                <a href="classes/createDailyBalanceRelationship1561358492040.html" data-type="entity-link">createDailyBalanceRelationship1561358492040</a>
                            </li>
                            <li class="link">
                                <a href="classes/createOauth1560545960045.html" data-type="entity-link">createOauth1560545960045</a>
                            </li>
                            <li class="link">
                                <a href="classes/createOauth2Middleware1561200781531.html" data-type="entity-link">createOauth2Middleware1561200781531</a>
                            </li>
                            <li class="link">
                                <a href="classes/createUserColumn1560421973676.html" data-type="entity-link">createUserColumn1560421973676</a>
                            </li>
                            <li class="link">
                                <a href="classes/DailyBalance.html" data-type="entity-link">DailyBalance</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link">RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestTokenDto.html" data-type="entity-link">RequestTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/userForAccountVerification1561019799282.html" data-type="entity-link">userForAccountVerification1561019799282</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/Oauth2Middleware.html" data-type="entity-link">Oauth2Middleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});