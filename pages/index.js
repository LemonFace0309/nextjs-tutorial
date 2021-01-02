import BaseLayout from '../components/Layouts/BaseLayout'

import { Container, Button } from 'reactstrap'

const Index = (props) => {
  return (
    <BaseLayout>
      <Container>
        <h1>Hi</h1>
        <Button color="primary">Hi</Button>
      </Container>
    </BaseLayout>
  )
}

export default Index
