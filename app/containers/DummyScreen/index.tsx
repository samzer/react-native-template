import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MetaActions from 'app/stores/Meta/Actions';
import {makeSelectData} from 'app/stores/Meta/Selectors';

import styled from 'styled-components/native';

const Dummy = (props: {data: string; loadData: Function}) => {
  React.useEffect(() => {
    props.loadData();
  }, []);

  return (
    <Container>
      <Title>Dummy Screen</Title>
      <Description>This is just for placeholder - {props.data}</Description>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  loadData: () => dispatch(MetaActions.loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dummy);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: blue;
`;

const Description = styled.Text`
  font-size: 14px;
  color: grey;
`;
