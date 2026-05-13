import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import "../../app.css";
import "../../index.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import heroImage from "../../assets/images/bwb_jm_lnjh.jpg__1320x740_q95_crop_subsampling-2_upscale.jpg";

function Home() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    campus: "",
    distance: "",
    budget: "",
    preferences: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://6a04295c2afe8349b4b5fde3.mockapi.io/properties"
      );

      const data = await response.json();

      const filteredProperties = data.filter(
        (property) => {
          const text = `
            ${property.title}
            ${property.description}
            ${property.address}
            ${property.neighborhood}
            ${property.availableFor}
            ${property.housingType}
          `.toLowerCase();

          const searchText =
            searchData.preferences.toLowerCase();

          const matchesPreferences =
            searchText === "" ||
            text.includes(searchText);

          const matchesBudget =
            searchData.budget === "" ||
            Number(property.monthlyPrice) <=
              Number(searchData.budget);

          const matchesDistance =
            searchData.distance === "" ||
            Number(
              property.distanceFromUniversity
            ) <=
              Number(searchData.distance);

          return (
            matchesPreferences &&
            matchesBudget &&
            matchesDistance
          );
        }
      );

      navigate("/all-residence", {
        state: {
          properties: filteredProperties,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-background">
          <img
            src={heroImage}
            alt="صورة سكن طلابي"
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <Header />

          <p id="hero"></p>

          <div className="hero-text">
            <div className="hero-badge">
              <span>
                منصة سكن طلبة جامعة النجاح
                الوطنية
              </span>
            </div>

            <h1 className="hero-title">
              ابحث عن{" "}
              <span>سكنك المثالي</span>
              <br />
              بجانب الجامعة
            </h1>

            <p className="hero-description">
              UniStay تساعدك في العثور
              على أفضل خيارات السكن
              بالقرب من جامعة النجاح
              الوطنية، شقق، غرف
              واستوديوهات بأسعار مناسبة
              للطلاب.
            </p>
          </div>

          <form
            className="search-box"
            id="search-section"
            onSubmit={handleSearch}
          >
            <div className="search-field">
              <label htmlFor="campus">
                الحرم الجامعي
              </label>

              <select
                id="campus"
                name="campus"
                value={searchData.campus}
                onChange={handleChange}
              >
                <option value="">
                  اختر الحرم
                </option>

                <option value="new-campus">
                  الحرم الجديد
                </option>

                <option value="old-campus">
                  الحرم القديم
                </option>
              </select>
            </div>

            <div className="search-field">
              <label htmlFor="distance">
                أقصى مسافة (دقائق)
              </label>

              <input
                type="number"
                id="distance"
                name="distance"
                min="1"
                placeholder="مثال: 15"
                value={searchData.distance}
                onChange={handleChange}
              />
            </div>

            <div className="search-field">
              <label htmlFor="budget">
                الميزانية الشهرية
              </label>

              <select
                id="budget"
                name="budget"
                value={searchData.budget}
                onChange={handleChange}
              >
                <option value="">
                  اختر الميزانية
                </option>

                <option value="50">
                  50 شيكل
                </option>

                <option value="100">
                  100 شيكل
                </option>

                <option value="150">
                  150 شيكل
                </option>

                <option value="200">
                  200 شيكل
                </option>

                <option value="250">
                  250 شيكل
                </option>

                <option value="300">
                  300 شيكل
                </option>

                <option value="350">
                  350 شيكل
                </option>

                <option value="400">
                  400 شيكل
                </option>

                <option value="450">
                  450 شيكل
                </option>

                <option value="500">
                  500 شيكل
                </option>

                <option value="550">
                  550 شيكل
                </option>

                <option value="600">
                  600 شيكل
                </option>

                <option value="650">
                  650 شيكل
                </option>

                <option value="700">
                  700 شيكل
                </option>

                <option value="750">
                  750 شيكل
                </option>

                <option value="800">
                  800 شيكل
                </option>

                <option value="850">
                  850 شيكل
                </option>

                <option value="900">
                  900 شيكل
                </option>

                <option value="950">
                  950 شيكل
                </option>

                <option value="1000">
                  1000 شيكل
                </option>

                <option value="1050">
                  1050 شيكل
                </option>

                <option value="1100">
                  1100 شيكل
                </option>

                <option value="1150">
                  1150 شيكل
                </option>

                <option value="1200">
                  1200 شيكل
                </option>

                <option value="1250">
                  1250 شيكل
                </option>

                <option value="1300">
                  1300 شيكل
                </option>

                <option value="1350">
                  1350 شيكل
                </option>

                <option value="1400">
                  1400 شيكل
                </option>

                <option value="1450">
                  1450 شيكل
                </option>

                <option value="1500">
                  1500 شيكل
                </option>

                <option value="1550">
                  1550 شيكل
                </option>

                <option value="1600">
                  1600 شيكل
                </option>

                <option value="1650">
                  1650 شيكل
                </option>

                <option value="1700">
                  1700 شيكل
                </option>

                <option value="1750">
                  1750 شيكل
                </option>

                <option value="1800">
                  1800 شيكل
                </option>

                <option value="1850">
                  1850 شيكل
                </option>

                <option value="1900">
                  1900 شيكل
                </option>

                <option value="1950">
                  1950 شيكل
                </option>

                <option value="2000">
                  2000 شيكل
                </option>
              </select>
            </div>

            <div className="search-field search-field-wide">
              <label htmlFor="preferences">
                صف السكن الذي تبحث عنه
              </label>

              <input
                type="text"
                id="preferences"
                name="preferences"
                placeholder="مثال: أريد سكن هادئ قريب من الجامعة وبسعر مناسب"
                value={searchData.preferences}
                onChange={handleChange}
              />
            </div>

            <div className="search-action">
              <button
                type="submit"
                className="search-btn"
              >
                ابحث الان
              </button>
            </div>
          </form>
        </div>
      </section>

      <section
        className="results-section"
        id="results-section"
      >
        <div className="results-grid"></div>
      </section>

      <section
        className="features-section"
        id="why-us"
      >
        <div className="features-header">
          <span className="features-badge">
            ميزات فريدة
          </span>

          <h2 className="features-title">
            لماذا تختار منصتنا؟
          </h2>

          <p className="features-description">
            نوفر لك تجربة أكثر أمانًا
            ووضوحًا وراحة للعثور على
            السكن الطلابي المناسب.
          </p>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <span className="feature-line"></span>

            <h3 className="feature-card-title">
              أمان وموثوقية
            </h3>

            <p className="feature-card-text">
              جميع العقارات المعروضة تمر
              بمراجعة دقيقة لتوفير تجربة
              سكن موثوقة وآمنة للطلاب.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-line"></span>

            <h3 className="feature-card-title">
              تحقق من المالكين
            </h3>

            <p className="feature-card-text">
              نتحقق من بيانات المالكين
              لتقليل الاحتيال ورفع مستوى
              الثقة بين الطلاب وأصحاب
              العقارات.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-line"></span>

            <h3 className="feature-card-title">
              تقييمات حقيقية
            </h3>

            <p className="feature-card-text">
              استعرض آراء وتجارب طلاب
              حقيقيين سبق لهم السكن في
              نفس الوحدات قبل اتخاذ
              قرارك.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-line"></span>

            <h3 className="feature-card-title">
              بحث متقدم
            </h3>

            <p className="feature-card-text">
              استخدم فلاتر دقيقة تساعدك
              في الوصول إلى السكن الأنسب
              حسب الموقع والسعر
              والاحتياجات.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-line"></span>

            <h3 className="feature-card-title">
              مجتمع طلابي
            </h3>

            <p className="feature-card-text">
              اكتشف بيئة طلابية قريبة منك
              وتعرّف على سكن يناسب نمط
              حياتك واحتياجاتك اليومية.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-line"></span>

            <h3 className="feature-card-title">
              دعم مستمر
            </h3>

            <p className="feature-card-text">
              فريق الدعم متواجد لمساعدتك
              والإجابة عن استفساراتك
              لضمان تجربة استخدام أكثر
              سلاسة.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;