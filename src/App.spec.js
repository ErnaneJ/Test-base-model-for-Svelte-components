import {fireEvent, render} from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
  test('The message and input value must always be the same', async () => {
    const {container, getByText} = render(App);
    const input = container.querySelector('input');
    const button = container.querySelector('button');

    // initial state
    expect(getByText('Hello'));
    expect(input.value).toBe('Hello');
    // type in input
    await fireEvent.input(input, {target: {value: 'leave a star'}});
    expect(getByText('leave a star'));
    expect(input.value).toBe('leave a star');
    // click button
    await fireEvent.click(button);
    expect(getByText('bye'));
    expect(input.value).toBe('bye');
  });
});