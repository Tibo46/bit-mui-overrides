import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './button';

describe('Button', () => {
  it('renders the contained button when not props passed', () => {
    const wrapper = renderer.create(<Button />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the outlined button when variant passed', () => {
    const wrapper = renderer.create(<Button variant="outlined" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the text button when variant passed', () => {
    const wrapper = renderer.create(<Button variant="text" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the button in secondary color if passed', () => {
    const wrapper = renderer.create(<Button color="secondary" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the icon when passed', () => {
    const wrapper = renderer.create(<Button icon={<>Icon</>} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the loader if loading state passed', () => {
    const wrapper = renderer.create(<Button loading={true} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the loader in secondary color if loading state and color passed', () => {
    const wrapper = renderer.create(<Button loading={true} color="secondary" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders as disabled if disabled state passed', () => {
    const wrapper = renderer.create(<Button disabled={true} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
