import PageHead from "../src/components/shared/page-head";
const NotFound = () => {
  return (
    <>
      <PageHead title="404" />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <img src="/images/logo.png" style={{ marginBottom: "20px" }} />
        <h1>Page Not Found</h1>
      </div>
    </>
  );
};

export default NotFound;
