import React, { Component } from 'react'




class Home extends Component {
    render() {
        return (
            
            <section className="projects">

                    <div className="container">
                        <a href=""><img src="Images/Design-3.png" width="200" height="200" alt="Pybot"/><p>Design 3</p></a>
                        <a href=""><img src="Images/Design-2.png" width="200" height="200" alt="Pybot"/><p>Design 2</p></a>
                        <a href=""><img src="Images/Design-1.png" width="200" height="200" alt="Pybot"/><p>Design 1</p></a>
                    </div>

                    <div className="container">
                        <a href=""><img src="Images/Design-6.png" width="200" height="200" alt="Pybot"/><p>Design 6</p></a>
                        <a href=""><img src="Images/Design-5.png" width="200" height="200" alt="Pybot"/><p>Design 5</p></a>
                        <a href=""><img src="Images/Design-4.png" width="200" height="200" alt="Pybot"/><p>Design 4</p></a>
                    </div>

                       
            </section>
        )
    }
}

export default Home


