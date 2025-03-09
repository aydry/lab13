import { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    groupCode: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Форма користувача</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Ім'я"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Прізвище"
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="groupCode"
          placeholder="Код групи"
          value={formData.groupCode}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Електронна пошта"
          value={formData.email}
          onChange={handleChange}
        />
      </form>

      <h3>Введені дані:</h3>
      <ul>
        <li>Ім'я: {formData.name}</li>
        <li>Прізвище: {formData.surname}</li>
        <li>Код групи: {formData.groupCode}</li>
        <li>Email: {formData.email}</li>
      </ul>
    </div>
  );
}

export default UserForm;
