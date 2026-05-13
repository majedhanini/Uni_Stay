import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import SideBar from "../../components/Sidebar/SideBar";
import MobileSidebar from "../../components/Sidebar/MobileSidebar";
import Footer from "../../components/Footer/Footer";

const AllResidence = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState(
    location.state?.properties || []
  );

  const [smallScreen, setSmallScreen] = useState(
    window.innerWidth >= 1000
  );

  const [liked, setLiked] = useState({});

  useEffect(() => {
    const getAllProperties = async () => {
      try {
        const response = await fetch(
          "https://6a04295c2afe8349b4b5fde3.mockapi.io/properties"
        );

        const result = await response.json();

        if (!location.state?.properties) {
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllProperties();
  }, [location.state]);

  useEffect(() => {
    const handelSmallScreen = () => {
      setSmallScreen(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handelSmallScreen);

    return () => {
      window.removeEventListener("resize", handelSmallScreen);
    };
  }, []);

  return (
    <>
      <div
        className="d-flex p-4"
        style={{
          minHeight: "100vh",
          color: "#1b2a41",
          backgroundColor: "white",
        }}
      >
        <div className="col-12 col-md-12 col-lg-9">
          <p
            className="pt-4"
            style={{
              color: "gray",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            {data.length} results
          </p>

          {!smallScreen && <MobileSidebar />}

          <div className="row">
            {data.map((property) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-4"
                key={property?.id}
              >
                <div
                  className="card shadow-sm border-0 h-100"
                  style={{
                    cursor: "pointer",
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={
                      property?.images?.[0] ||
                      "https://via.placeholder.com/400x300"
                    }
                    alt={property?.title}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body bg-light">
                    <h5
                      className="card-title"
                      style={{
                        color: "#1b2a41",
                        fontWeight: "700",
                      }}
                    >
                      {property?.title}
                    </h5>

                    <p
                      style={{
                        color: "#666",
                        minHeight: "50px",
                      }}
                    >
                      {property?.description}
                    </p>

                    <div className="mb-2">
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1b2a41",
                        }}
                      >
                        📍 {property?.address}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1b2a41",
                        }}
                      >
                        💰 {property?.monthlyPrice} ₪
                      </span>
                    </div>

                    <div className="mb-3">
                      <span
                        style={{
                          color: "#777",
                        }}
                      >
                        ⏱ {property?.distanceFromUniversity} دقائق عن الجامعة
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        className="btn"
                        style={{
                          width: "80%",
                          height: "45px",
                          borderRadius: "10px",
                          backgroundColor: "#1b2a41",
                          color: "white",
                          fontWeight: "600",
                        }}
                        onClick={() =>
                          navigate( `/details/${property?.id}`)
                        }
                      >
                        عرض التفاصيل
                      </button>

                      <div
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          setLiked((prev) => ({
                            ...prev,
                            [property.id]: !prev[property.id],
                          }))
                        }
                      >
                        {liked[property.id] ? (
                          <i
                            className="bi bi-heart-fill"
                            style={{
                              fontSize: "32px",
                              color: "red",
                            }}
                          ></i>
                        ) : (
                          <i
                            className="bi bi-heart"
                            style={{
                              fontSize: "32px",
                              color: "#1b2a41",
                            }}
                          ></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {smallScreen && <SideBar />}
      </div>

      <Footer />
    </>
  );
};

export default AllResidence;