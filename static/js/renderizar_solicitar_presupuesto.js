
function cargarModalPresupuesto() {
let contenedor = document.getElementById("modal");
contenedor.innerHTML = `
<div class="modal fade" id="presupuestoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true" aria-expanded="true">
<div class="modal-dialog">
    <div class="modal-content">

        <div class="modal-header">
            <h5 class="modal-title" id="addModalLabel">Solicitar Presupuesto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
            <div class="container-fluid">
                <form id="form-presupuesto" action="" method="">

                    <div class="form-grup py-1">
                        <label for="txt-metros-p">M² a Cubrir</label>
                        <input type="text" id="txt-metros-p" name="txt-metros-p" class="form-control">
                        <div class="" id="valid-metros-p"></div>
                    </div>

                    <div>
                        <br>
                        <label for="">Trabajo a realizar</label>
                        <div class="form-check py-1">
                            <input class="form-check-input" type="radio" name="opciones" id="txt-pared-p">
                            <label class="form-check-label" for="txt-pared-p">
                                Revestimiento de paredes
                            </label>
                        </div>

                        <div class="form-check py-1">
                            <input class="form-check-input" type="radio" name="opciones" id="txt-techado-p">
                            <label class="form-check-label" for="txt-techado-p">
                                Techado de yeso
                            </label>
                        </div>
                        <div class="form-check py-1">
                            <input class="form-check-input" type="radio" name="opciones" id="txt-otro-p">
                            <label class="form-check-label" for="txt-otro-p">
                                Otro
                            </label>
                        </div>
                        <div class="" id="valid-trabajo-p"></div>
                    </div>


                    <br>
                    <h5>¿A donde te enviamos la cotización?</h5>
                    <hr>

                    <div class="form-grup py-1">
                        <label for="txt-nombre-p">Nombre Completo</label>
                        <input type="text" id="txt-nombre-p" name="txt-nombre-p" class="form-control">
                        <div class="" id="valid-nombre-p"></div>
                    </div>


                    <div class="form-grup py-1">
                        <label for="txt-email-p">Email</label>
                        <input type="text" id="txt-email-p" name="txt-email-p" class="form-control">
                        <div class="" id="valid-email-p" ></div>
                    </div>

                    <div class="form-grup py-1">
                        <button type="submit" onclick="validar_presupuesto(Event)"
                            class="btn btn-primary btn-block text-white">Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>`;
}

document.addEventListener('DOMContentLoaded', function () {
    cargarModalPresupuesto();
});