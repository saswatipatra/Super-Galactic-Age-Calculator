import { getPlanetYear } from './../src/backend-code.js';
import { getPlanetDays } from './../src/backend-code.js';
import { getRemainingLife } from './../src/backend-code.js';

describe('getPlanetYear', function() {

  it('should calculate user age in Earth years', function() {
    getPlanetYear(10692.55460079861, 1)===29;
  });
});

describe('getPlanetDays', function() {

  it('should calculate user age in days in Earth years', function() {
    getPlanetDays(10692.55460079861, 365.26)=== 10692.5;
  });
});

describe('getRemainingLife', function() {

  it('should calculate user life expectancy in Earth years', function() {
    getRemainingLife(29)=== 40;
  });
});
