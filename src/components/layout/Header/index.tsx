import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, animations, tokens } from '../../../design-system';

function Header() {
  return (
    <div className="bg-primary-light">
      <div className="container-custom">
        <motion.header className="py-4 md:py-6" {...animations.fadeUp}>
          <nav aria-label="Main navigation">
            <ul
              className={`flex justify-end ${tokens.spacing.gap.responsive.small} list-none m-0 p-0`}
            >
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <motion.div {...animations.navLink}>
                  <a
                    className="link text-base md:text-lg font-medium"
                    href="./assets/doc/resume.pdf"
                    download="taher-abouzeid-resume.pdf"
                  >
                    Resume
                  </a>
                </motion.div>
              </li>
            </ul>
          </nav>
        </motion.header>
      </div>
    </div>
  );
}

export default Header;
