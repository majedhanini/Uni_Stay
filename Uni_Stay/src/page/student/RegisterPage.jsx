import { useState } from "react";
import "./RegisterPage.css";
import Header from "../../components/Header/Header";
import FooterPages from "../../components/Footer/FooterPages";
import heroImage from "../../assets/images/IMG_6971.jpg";

function StudentRegister() {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleStudentClick = () => {
    window.location.href = "/student-register";
  };

  const handleOwnerClick = () => {
    window.location.href = "/owner-register";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !fullName.trim() ||
      !idNumber.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("يرجى تعبئة جميع الحقول");
      return;
    }

    if (fullName.trim().length < 4) {
      alert("يرجى إدخال اسم كامل صحيح");
      return;
    }

    if (!/^[0-9]+$/.test(idNumber) || idNumber.trim().length < 6) {
      alert("يرجى إدخال رقم جامعي صحيح");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("يرجى إدخال بريد إلكتروني صحيح");
      return;
    }

    if (!/^[0-9]+$/.test(phone) || phone.trim().length < 10) {
      alert("يرجى إدخال رقم هاتف صحيح");
      return;
    }

    if (password.trim().length < 6) {
      alert("كلمة المرور يجب أن تكون 6 خانات على الأقل");
      return;
    }

    if (password !== confirmPassword) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }

    const newStudent = {
      fullName,
      idNumber,
      email,
      phone,
      password,
    };

    try {
      const response = await fetch(
        "https://6a041e312afe8349b4b5ea02.mockapi.io/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        }
      );

      if (response.ok) {
        alert("تم إنشاء حساب الطالب بنجاح");

        setFullName("");
        setIdNumber("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");

        window.location.href = "/student";
      } else {
        alert("حدث خطأ أثناء إنشاء الحساب");
      }
    } catch (error) {
      console.log(error);
      alert("فشل الاتصال بالسيرفر");
    }
  };

  return (
    <>
      <section className="student-hero">
        <div className="student-hero-background">
          <img src={heroImage} alt="صورة سكن طلابي" />
        </div>

        <div className="student-hero-overlay"></div>

        <div className="student-hero-content">
          <Header />

          <main className="login-wrapper">
            <section className="login-card">
              <h2>إنشاء حساب طالب</h2>

              <p className="subtitle">
                أكمل بياناتك للبدء باستخدام منصة UniStay بسهولة ووضوح
              </p>

              <div className="user-type">
                <button
                  type="button"
                  className="type-btn active"
                  onClick={handleStudentClick}
                >
                  طالب
                </button>

                <button
                  type="button"
                  className="type-btn"
                  onClick={handleOwnerClick}
                >
                  صاحب سكن
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="fullName">الاسم الكامل</label>

                  <input
                    type="text"
                    id="fullName"
                    placeholder="أدخل اسمك الكامل"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="idNumber">الرقم الجامعي</label>

                  <input
                    type="text"
                    id="idNumber"
                    placeholder="11912345"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">
                    البريد الإلكتروني الجامعي
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="example@student.najah.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phone">رقم الهاتف</label>

                  <input
                    type="text"
                    id="phone"
                    placeholder="0599123456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="password">كلمة المرور</label>

                  <div className="password-box">
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "إخفاء" : "إظهار"}
                    </button>

                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="أدخل كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="confirmPassword">
                    تأكيد كلمة المرور
                  </label>

                  <div className="password-box">
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? "إخفاء" : "إظهار"}
                    </button>

                    <input
                      type={
                        showConfirmPassword ? "text" : "password"
                      }
                      id="confirmPassword"
                      placeholder="أعد إدخال كلمة المرور"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  إنشاء حساب طالب
                </button>
              </form>
            </section>
          </main>
        </div>
      </section>

      <FooterPages />
    </>
  );
}

export default StudentRegister;