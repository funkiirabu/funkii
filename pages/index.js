import Container from '@/components/Container'
import Header from '@/components/Header'
import ProjectsList from '@/components/ProjectsList'
import ExperimentsList from '@/components/ExperimentsList'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'
import { experiments } from '@/data/experiments'

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <ProjectsList projects={projects} />
        <ExperimentsList experiments={experiments} />
        <Footer />
      </Container>
    </div>
  )
}
