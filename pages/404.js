const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: 60,
            textAlign: "center",
          }}
        >
          404
        </h1>
        <h3>Page Not Found</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
