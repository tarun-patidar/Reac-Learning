import { Component } from 'react'

interface HelloWorldProps {
  name: string;
  age: number;
}

export default class HelloWorld extends Component<HelloWorldProps> {
  render() {
    const { name, age } = this.props
    return (
        <div>
            <h1>Hello, {name}!</h1>
            {age >= 18 ? (
                <p>Welcome to the Team</p>
            ) : (
                <p>You are too young to join the Team</p>
            )}
        </div>
    )
  }
}