import { useState } from "react";
import LoginModal from "./LoginModal";
import ThemeModal from "./ThemeModal";
import WarningModal from "./WarningModal";
import Modal from "./Modal";
import Login from "./Login";

const App = () => {
  const [isOpen, setIsOpen] = useState(null);
  const close = () => setIsOpen(null);
  return (
    <div className="p-5">
      <div className="d-flex justify-content-center gap-4 my-4">
        <button onClick={() => setIsOpen("login")} className="bg-danger">
          Giriş Yap
        </button>
        <button onClick={() => setIsOpen("darkmode")} className="bg-warning">
          Tema Seç
        </button>
        <button onClick={() => setIsOpen("warning")} className="bg-primary">
          Uyarı Fırlat
        </button>
      </div>

      {/*1.YOL*/}
      {isOpen === "login1" ? (
        <LoginModal close={() => setIsOpen(false)} />
      ) : isOpen === "darkmode1" ? (
        <ThemeModal close={() => setIsOpen(false)} />
      ) : isOpen === "warning1" ? (
        <WarningModal close={() => setIsOpen(false)} />
      ) : (
        ""
      )}

      {/**2.YOL */}
      {isOpen === "login" ? (
        <Modal close={close}>
          <Login />
        </Modal>
      ) : isOpen === "darkmode" ? (
        <Modal close={close}>
          <h2>Zevkinize Uyan Temayı Seçiniz</h2>
          <select className="form-select shadow">
            <option>Koyu</option>
            <option>Açık</option>
          </select>
        </Modal>
      ) : isOpen === "warning" ? (
        <Modal close={close}>
          <h2>Üzgünüz Bir Hata Oluştu</h2>
          <p>API isteğinde 404 hata koduyla bir sorun oluştu</p>
          <p>Lütfen daha sonra tekrar deneyiniz</p>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
