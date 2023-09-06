import dynamic from 'next/dynamic';
 
const DynamicForm = dynamic(() => import('../../components/fanossr'), {
  ssr: false,
})

export default function Nossr() {
  return (
    <DynamicForm />
  );
}