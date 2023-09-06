import { GetStaticProps } from "next";
import Layout from "../../components/layout";

export default function SSR({ postData }) {
  return (
    <Layout>
      Contact Me!
      <TextToHtml text={ postData }></TextToHtml>
    </Layout>
  );
}

const TextToHtml = ({ text }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
};

const fetchData = async () => {
  const response = await fetch("https://jnjdev.tfaforms.net/rest/forms/view/1111");
  const data = await response.text();
  return data;
}

export const getStaticProps: GetStaticProps = async () => {
  const postData = await fetchData();
  return {
    props: {
      postData,
    },
  };
}