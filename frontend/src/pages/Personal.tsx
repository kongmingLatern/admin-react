import Header from '../components/Header'

export default function Personal() {
  return (
    <>
      <Header title="个人中心" text="返回" click={() => history.back()} />
    </>
  )
}
