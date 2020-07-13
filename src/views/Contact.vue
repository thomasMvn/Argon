<template>
     <section class="section section-shape section-lg my-0 section-contact-us">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           
        </div>       
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    <div class="col-sm-6 text-center justify-content-center">
                        <address class="img-thumbnail">
                            <br>
                            <p>Vous pouvez aussi nous contacter à cette adresse :</p>
                            <strong>CSMB Cachan</strong><br>
                            Centre d'athlétisme du sable<br>
                            Avenue Jacques Michel<br>
                            94230 Cachan<br>
                        </address>
                    </div>
                    <div class="col-sm-6">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Contactez-nous?</h4>

                             <base-input class="mt-5"
                                        alternative
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input 
                                        alternative
                                        placeholder="Nom"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                           
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Entrer votre message..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Envoyé
                            </base-button>
                        </card>
                    </div>
                     
                </div>
            </div>
           
        </section>
</template>
<script>
export default {};
</script>
<style>
</style>
