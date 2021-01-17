import styled from "styled-components";

import PageWrapper from "./pageWrapper";

const AuthenticatedWrapper = styled.div`
  text-align: center;
  line-height: 3em;
`;

const Confirmed = styled.p`
  display: block;
  font-family: "Ubuntu";
  font-size: 30px;
`;

const Authenticated = () => (
  <PageWrapper>
    <AuthenticatedWrapper>
      <Confirmed>
        Your github token has been verified!
      </Confirmed>
      <Confirmed>
        Check your email and download the Voiceflow app to start hacking.
      </Confirmed>
    </AuthenticatedWrapper>
  </PageWrapper>
)

export default Authenticated;