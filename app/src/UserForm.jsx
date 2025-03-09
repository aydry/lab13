import { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    groupCode: "",
    email: "",
  });

  const [savedData, setSavedData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.surname && formData.groupCode && formData.email) {
      setSavedData([...savedData, formData]); // Додаємо новий запис у список
      setFormData({ name: "", surname: "", groupCode: "", email: "" }); // Очищаємо форму
    }
  };

  return (
    <div className="form-container">
      <h2>Форма користувача</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Зберегти</button>
      </form>

      <h3>Збережені записи:</h3>
      <ul>
        {savedData.map((data, index) => (
          <li key={index}>
            <strong>{data.name} {data.surname}</strong> — {data.groupCode}, {data.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;
