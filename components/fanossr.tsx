import Head from "next/head";

export default function FormAssembly() {
  return (
    <>
      <Head>
        <script src="https://jnjdev.tfaforms.net/publish/1111" data-qp-target-id="form-1111-nextjs" defer></script>
      </Head>
      <div id="form-1111-nextjs"></div>
    </>
  );
}