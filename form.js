export const formSelector = {
  name: "formTest",
  type: "response",
  match: ({ trace }) =>
    trace.type === "ext_form" || trace.payload.name === "ext_form",
  render: ({ trace, element }) => {
    const formContainer = document.createElement("div");
    formContainer.innerHTML = `
    <style>
      .formSelector {
        width: 100%;
      }
      form {
        display: flex;
        gap: 0.25rem;
        flex-direction: column;
        width: 20rem;
      }
    </style>
    <div class="formSelector">
      <form>
        <input type="text" name="nombre" placeholder="Tu nombre" />
        <input type="text" name="correo" placeholder="Tu correo" />
        <button type="submit" class="submit">Enviar</button>
      </form>
    </div>
    `;
    const formSelected = formContainer.querySelector("form");
    formSelected.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = formSelected.nombre.value;
      const correo = formSelected.correo.value;

      window.voiceflow.chat.interact({
        type: "submitted",
        payload: {
          nombre,
          correo,
        },
      });
    });
    //element.appendChild(formContainer);
  },
};
