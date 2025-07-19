import { useEffect, useRef, useState } from "react";
import "./Homebody.css";
function HomeBody({ setdescription, setshowdream }) {
  const [Text, setText] = useState("");
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    }
  }, [Text]);
  const handlesubmit = (e) => {
    e.preventDefault();
    setdescription(Text);
    setshowdream(true);
  };
  return (
    <div className="body" style={{ height: "80%" }}>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-white mb-3">
              Visualize Your Dream Here
            </h1>
            <p>Write your imagination</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-body-tertiary d-flex flex-column align-items-center"
              onSubmit={handlesubmit}
            >
              <div className="form-label w-100 d-flex justify-content-center">
                <textarea
                  ref={textAreaRef}
                  className="description-control form-control descriptionbox"
                  id="descriptioninput"
                  placeholder="Describe your Imagination"
                  value={Text}
                  onChange={(e) => setText(e.target.value)}
                  rows={1}
                  style={{
                    overflow: "hidden",
                    resize: "none",
                    fontSize: "18px",
                    padding: "8px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
              </div>

              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                style={{
                  backgroundColor: "var(--primary)",
                  fontSize: "18px",
                  height: "auto",
                }}
              >
                Get Gif
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
