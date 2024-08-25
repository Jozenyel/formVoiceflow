export const formSelector = {
  name: "form",
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
    const submitButton = formContainer.querySelector("submit");
    submitButton.addEventListener("click", () => {
      window.voiceflow.chat.interact({
        type: "submitted",
        payload: {
          nombre,
          correo,
        },
      });
    });
  },
};
