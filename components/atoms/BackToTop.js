import MainButton from './MainButton'

const BackToTop = () => {
  return (
    <div className="back-top" style={{ marginTop: '3rem' }}>
      <MainButton label="Back to top" callback={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  )
}

export default BackToTop
