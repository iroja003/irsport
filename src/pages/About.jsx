import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/img/Logo1.png';

//
const About = () => {
  return (
    <>
      <div className='container-fluid'>
          <div className="row">
              <div className="col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <div className="navbar-brand m-2">
                    <Link to="/"><img src={Logo} width='40px' height='40px' /></Link>
                    <h1>IR Sports</h1>    
                  </div>
                  <section className="container-fluid mb-3 section_about">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore inventore, expedita aperiam suscipit hic impedit quasi et porro quisquam dolorum, eveniet quod dignissimos, odio cumque quibusdam perspiciatis magni quos.
                      Rem repudiandae consectetur distinctio quasi provident vitae illum ea autem dicta, placeat animi tempore voluptatum nostrum eveniet consequuntur quod ratione beatae libero rerum alias quibusdam maxime molestias mollitia? Consectetur, accusantium.
                      Laudantium libero esse, aperiam consequuntur quis reiciendis natus doloremque cupiditate vel velit? Temporibus consequuntur sit tenetur cum, recusandae commodi consequatur at sunt fuga blanditiis, iste repudiandae dolor facere minus. Repudiandae?
                      Soluta, eius magni quibusdam vitae laboriosam deserunt natus ex et iure recusandae nam quisquam ipsa qui quo earum beatae fugiat doloremque explicabo in cum voluptate consequuntur consectetur voluptatibus maiores? Adipisci.
                      Velit beatae veniam doloremque quod repellat aspernatur esse quidem eum, dolore consectetur? Quas voluptate iure, molestias amet possimus veniam recusandae temporibus mollitia ex impedit. Earum sit sunt quam quis amet?
                      Est repellendus porro ad quo veritatis placeat unde velit laudantium nam assumenda facere quaerat, voluptatibus sunt voluptatem sapiente molestias commodi, in cum similique ratione sequi. Laboriosam debitis voluptatum non doloribus.
                      Reiciendis quas, ipsam recusandae incidunt nisi vitae nobis eveniet veniam aperiam necessitatibus quis accusantium, alias non ducimus sunt asperiores. Ut adipisci itaque dolor iure ea quod eaque! Nam, excepturi voluptatem.
                      Cupiditate obcaecati porro saepe quam odit et iste veritatis, sit dolores, ad aliquid. Ipsa repellat tenetur beatae dolor quae quos, nemo architecto dolorum? Iusto mollitia est eaque quidem magnam exercitationem?
                      Eveniet illo doloribus quisquam praesentium voluptatibus ex in quis, impedit temporibus similique quas eligendi eaque error unde quia obcaecati sunt aperiam iure dolor est expedita fugiat fuga! Fuga, eos? Enim.
                      Blanditiis quod minus aperiam aliquam ex rem architecto eius eveniet tempora sed libero velit iste consequatur itaque corporis unde sapiente, labore magni at perferendis asperiores quia magnam quas. Suscipit, qui.
                    </p>
                  </section>
              </div>
          </div>
      </div>
    </>
  );
};

export default About;