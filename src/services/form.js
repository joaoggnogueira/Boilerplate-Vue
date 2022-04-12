import { http } from "./config"

export const novoCandidato = function ({ username, usermail, usercareer }) {
  return new Promise((res, rej) => {
    http
      .post("/novo-candidato", { username, usermail, usercareer })
      .then((response) => {
        if (response && response.status == 200) {
          res(response.data)
        } else {
          rej(response.data)
        }
      })
      .catch((error) => {
        rej(error.response.data)
      })
  })
}
