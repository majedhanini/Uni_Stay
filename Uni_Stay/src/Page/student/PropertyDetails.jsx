import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ContactSidebar from "../../components/Sidebar/ContactSidebar";
import MobileContactBar from "../../components/Contact/MobileContactBar";
import Footer from "../../components/Footer/Footer";
import Comments from "../../components/Comments/comments";
import ImagesCarousel from "../../components/Carousel/Carousel";

const ResDetails = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 768
  );

  const [selected, setSelected] = useState(0);

  const [moreImagesButton, setMoreImagesButton] =
    useState(false);

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await fetch(
          "https: //6a04295c2afe8349b4b5fde3.mockapi.io/properties/${id}"
        );

        const data = await response.json();

        setProperty(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      getProperty();
    }
  }, [id]);

  useEffect(() => {
    const handleIsMobileState = () => {
      setIsMobile(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleIsMobileState);

    return () =>
      window.removeEventListener(
        "resize",
        handleIsMobileState
      );
  }, []);

  if (!property) {
    return (
      <div className="text-center mt-5">
        Loading...
      </div>
    );
  }

  const images =
    property?.images?.length > 0
      ? property.images
      : [
          "https://via.placeholder.com/600x400",
          "https://via.placeholder.com/600x400",
          "https://via.placeholder.com/600x400",
          "https://via.placeholder.com/600x400",
          "https://via.placeholder.com/600x400",
        ];

  const handleSelectedPic = (i) => {
    setSelected(i);
  };

  const amenities = [];

  if (property?.wifi) amenities.push("Wi-Fi");
  if (property?.parking) amenities.push("Parking");
  if (property?.security) amenities.push("Security");

  let restImages = 0;

  if (images.length - 5 <= 0) {
    restImages = false;
  } else {
    restImages = images.length - 5;
  }

  const handleMoreImagesButton = () => {
    setMoreImagesButton(true);
  };

  return (
    <>
      {moreImagesButton && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "black",
            zIndex: "555",
            padding: "20px",
            top: "3.5%",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <p
            style={{
              position: "absolute",
              top: 0,
              right: "18px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() =>
              setMoreImagesButton(false)
            }
          >
            X
          </p>

          <div
            style={{
              width: "82%",
              position: "relative",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            <ImagesCarousel
              image={images[0]}
            ></ImagesCarousel>
          </div>
        </div>
      )}

      <div
        className="container mt-4 col-12 col-md-12 col-lg-12"
        style={{ backgroundColor: "white" }}
      >
        <div className="mb-3">
          <ArrowBackIcon
            sx={{ color: "#1b2a41" }}
          ></ArrowBackIcon>

          <a
            href="/all-residence"
            className="mb-3"
            style={{
              textDecoration: "none",
              color: "#1b2a41",
            }}
          >
            <b> Back to previous page</b>
          </a>
        </div>

        <div className="d-flex flex-column flex-lg-row">
          <div className="col-12 col-md-12 col-lg-7 me-2">
            <div className="card">
              <img
                src={images[selected]}
                style={{
                  aspectRatio: "5/4",
                  height: "58vh",
                  objectFit: "cover",
                }}
              />

              {!isMobile && (
                <p
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    padding: "5px",
                    borderRadius: "8px",
                    background:
                      "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                    color: "white",
                  }}
                >
                  {selected + 1}/{images.length}
                </p>
              )}
            </div>

            {!isMobile && (
              <div
                className="d-flex mt-2"
                style={{
                  width: "100%",
                  height: "150px",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  gap: "6px",
                  cursor: "grab",
                }}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      handleSelectedPic(i)
                    }
                    style={{
                      flexShrink: 0,
                      height: "14vh",
                      border:
                        selected === i
                          ? "3.5px solid #1b2a41"
                          : "none",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img}
                      className="card"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-md-12 col-lg-5">
            {isMobile && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: "8px",
                  height: "65vh",
                  marginTop: "10px",
                }}
              >
                {images
                  .slice(1, 4)
                  .map((img, index) => (
                    <div
                      className="card"
                      key={index}
                    >
                      <img
                        src={img}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}

                <div
                  className="card overflow-hidden"
                  key={4}
                  style={{
                    backgroundColor: "#474545",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={images[4]}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {restImages && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor:
                          "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() =>
                        handleMoreImagesButton()
                      }
                    >
                      <p
                        style={{
                          color: "white",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        +{restImages}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="d-flex justify-content-between">
              <div
                className="d-flex"
                style={{
                  alignItems: "baseline",
                  color: "#1b2a41",
                }}
              >
                <h2>
                  {property?.monthlyPrice}₪
                </h2>

                <p style={{ color: "gray" }}>
                  /month
                </p>
              </div>

              <i
                className="bi bi-heart"
                style={{
                  fontSize: "35px",
                  position: "relative",
                  bottom: "10px",
                }}
              ></i>
            </div>

            <h2
              style={{
                color: "#1b2a41",
                fontWeight: "700",
              }}
            >
              {property?.title}
            </h2>

            <p
              style={{
                color: "gray",
                marginBottom: "20px",
              }}
            >
              📍 {property?.address}
            </p>

            <div
              className="d-flex flex-wrap gap-3 mb-4"
              style={{
                color: "#1b2a41",
                fontWeight: "600",
              }}
            >
              <span>
                🛏 {property?.rooms} غرف
              </span>

              <span>
                🚿 {property?.bathrooms} حمامات
              </span>

              <span>
                👥 {property?.capacity} أشخاص
              </span>

              <span>
                ⏱{" "}
                {
                  property?.distanceFromUniversity
                }{" "}
                دقائق
              </span>
            </div>

            <h5 style={{ color: "#1b2a41" }}>
              Description
            </h5>

            <p style={{ color: "gray" }}>
              {property?.description}
            </p>

            <h5 style={{ color: "#1b2a41" }}>
              Amenities
            </h5>

            <div
              className="d-flex"
              style={{ flexWrap: "wrap" }}
            >
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="bg-light p-2 m-2"
                  style={{
                    borderRadius: "15px",
                    color: "#1b2a41",
                    fontWeight: "600",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            {isMobile && <ContactSidebar />}

            {!isMobile && (
              <MobileContactBar />
            )}
          </div>
        </div>

        <Comments />
      </div>

      <Footer />
    </>
  );
};

export default ResDetails;