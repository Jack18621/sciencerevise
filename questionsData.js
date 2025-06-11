const questionData = {
  chemistry: {
    // Topic 1: Key concepts in chemistry (Edexcel Spec)
    "1. Key concepts in chemistry": {
      subtopics: {
        "Atomic structure": {
          quiz: [
            // Easy
            { question: "What is the relative charge of a proton?", options: ["+1", "0", "-1", "+2"], correct: 0 },
            { question: "What is the relative charge of a neutron?", options: ["+1", "0", "-1", "+2"], correct: 1 },
            { question: "What is the relative charge of an electron?", options: ["+1", "0", "-1", "+2"], correct: 2 },
            { question: "Where are protons and neutrons found in an atom?", options: ["Nucleus", "First shell", "Second shell", "Outside the atom"], correct: 0 },
            { question: "Where are electrons found in an atom?", options: ["Nucleus", "Shells/energy levels", "Neutrons", "Protons"], correct: 1 },
            // Medium
            { question: "What is the atomic number of an element?", options: ["Number of protons", "Number of neutrons", "Number of electrons", "Number of shells"], correct: 0 },
            { question: "What is the mass number of an atom?", options: ["Number of protons", "Number of neutrons", "Protons + neutrons", "Protons + electrons"], correct: 2 },
            { question: "What is an isotope?", options: ["Atoms with same protons, different neutrons", "Atoms with same neutrons, different protons", "Atoms with same electrons, different protons", "Atoms with same mass number, different atomic number"], correct: 0 },
            { question: "Which scientist proposed the nuclear model of the atom?", options: ["John Dalton", "Ernest Rutherford", "J.J. Thomson", "Niels Bohr"], correct: 1 },
            { question: "What is the maximum number of electrons in the first shell?", options: ["2", "8", "18", "32"], correct: 0 },
            // Hard
            { question: "How many protons, neutrons, and electrons are in a neutral atom of 23Na (sodium-23)?", options: ["11p, 12n, 11e", "12p, 11n, 11e", "11p, 11n, 12e", "12p, 12n, 11e"], correct: 0 },
            { question: "Which isotope of carbon is used in radiocarbon dating?", options: ["Carbon-12", "Carbon-13", "Carbon-14", "Carbon-15"], correct: 2 },
            { question: "What is the electron configuration of a sodium atom (atomic number 11)?", options: ["2,8,1", "2,7,2", "2,6,3", "2,8,2"], correct: 0 },
            { question: "Why are atoms electrically neutral?", options: ["Equal numbers of protons and electrons", "More neutrons than protons", "Electrons are heavier than protons", "Protons and neutrons cancel each other"], correct: 0 },
            { question: "Which subatomic particle determines the identity of an element?", options: ["Proton", "Neutron", "Electron", "Nucleus"], correct: 0 }
          ],
          terms: [
            { term: "Atom", definition: "The smallest particle of an element that retains the properties of that element." },
            { term: "Nucleus", definition: "The central part of an atom containing protons and neutrons." },
            { term: "Proton", definition: "A positively charged subatomic particle found in the nucleus." },
            { term: "Neutron", definition: "A neutral subatomic particle found in the nucleus." },
            { term: "Electron", definition: "A negatively charged subatomic particle found in shells (energy levels) around the nucleus." },
            { term: "Atomic number (Z)", definition: "The number of protons in the nucleus of an atom; determines the element." },
            { term: "Mass number (A)", definition: "The total number of protons and neutrons in an atom." },
            { term: "Isotope", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons." },
            { term: "Relative atomic mass (Ar)", definition: "The weighted average mass of an atom compared to 1/12 of a carbon-12 atom." },
            { term: "Electron configuration", definition: "The arrangement of electrons in shells/energy levels around the nucleus." },
            { term: "Nuclear model", definition: "A model of the atom with a small, dense, positively charged nucleus and electrons in shells." },
            { term: "Dalton model", definition: "Early model of the atom as a solid, indivisible sphere." },
            { term: "Plum pudding model", definition: "J.J. Thomson's model of the atom as a sphere of positive charge with embedded electrons." },
            { term: "Rutherford scattering experiment", definition: "Experiment that led to the discovery of the nucleus by firing alpha particles at gold foil." },
            { term: "Nuclide notation", definition: "A way of representing isotopes showing mass number and atomic number (e.g., 14C, 23Na)." }
          ]
        },
        "The periodic table": {
          quiz: [
            // Easy
            { question: "Who created the first periodic table?", options: ["Dmitri Mendeleev", "Dalton", "Bohr", "Rutherford"], correct: 0 },
            { question: "How are elements arranged in the modern periodic table?", options: ["Atomic number", "Atomic mass", "Alphabetically", "Density"], correct: 0 },
            { question: "What is a group in the periodic table?", options: ["Column", "Row", "Block", "Period"], correct: 0 },
            { question: "What is a period?", options: ["Row", "Column", "Block", "Group"], correct: 0 },
            { question: "Which group contains the noble gases?", options: ["0", "1", "7", "8"], correct: 0 },
            // Medium
            { question: "What is the trend in reactivity down Group 1?", options: ["Increases", "Decreases", "Stays the same", "Varies randomly"], correct: 0 },
            { question: "What happens to atomic radius across a period?", options: ["Decreases", "Increases", "Stays the same", "Varies randomly"], correct: 0 },
            { question: "What is the general property of transition metals?", options: ["Form coloured compounds", "Low melting point", "Low density", "Are gases"], correct: 0 },
            { question: "Which group contains the halogens?", options: ["7", "1", "0", "2"], correct: 0 },
            { question: "What is the main difference between metals and non-metals in the periodic table?", options: ["Metals are on the left, non-metals on the right", "Metals are on the right, non-metals on the left", "No difference", "Metals are gases"], correct: 0 },
            // Hard
            { question: "Why did Mendeleev leave gaps in his periodic table?", options: ["For undiscovered elements", "He forgot", "To fit the pattern", "For noble gases"], correct: 0 },
            { question: "Which element is in period 3, group 2?", options: ["Magnesium", "Sodium", "Aluminium", "Calcium"], correct: 0 },
            { question: "What is the electron configuration of chlorine (atomic number 17)?", options: ["2,8,7", "2,8,8", "2,7,8", "2,8,6"], correct: 0 },
            { question: "Why do elements in the same group have similar chemical properties?", options: ["Same number of outer electrons", "Same number of protons", "Same mass number", "Same density"], correct: 0 },
            { question: "Which group contains elements that are all gases at room temperature?", options: ["Group 0", "Group 1", "Group 2", "Group 7"], correct: 0 }
          ],
          terms: [
            { term: "Periodic table", definition: "A chart that arranges all known elements in order of increasing atomic number." },
            { term: "Group", definition: "A column of elements with similar chemical properties." },
            { term: "Period", definition: "A row of elements with increasing atomic number." },
            { term: "Noble gases", definition: "Group 0 elements with full outer electron shells, making them inert." },
            { term: "Halogens", definition: "Group 7 elements, very reactive non-metals." },
            { term: "Alkali metals", definition: "Group 1 elements, very reactive metals." },
            { term: "Transition metals", definition: "Elements found in the central block of the periodic table, often with variable oxidation states and form coloured compounds." },
            { term: "Atomic number", definition: "The number of protons in the nucleus of an atom." },
            { term: "Metals", definition: "Elements that are good conductors of heat and electricity, typically found on the left of the periodic table." },
            { term: "Non-metals", definition: "Elements that are poor conductors of heat and electricity, typically found on the right of the periodic table." },
            { term: "Electron configuration", definition: "The arrangement of electrons in shells around the nucleus." },
            { term: "Mendeleev", definition: "The scientist who created the first widely accepted periodic table." }
          ]
        },
        "Ionic bonding": {
          quiz: [
            // Easy
            { question: "What happens to electrons in ionic bonding?", options: ["Transferred from metal to non-metal", "Shared between atoms", "Stay in the nucleus", "Become neutrons"], correct: 0 },
            { question: "What ions do metals form?", options: ["Positive ions (cations)", "Negative ions (anions)", "Neutral atoms", "Electrons"], correct: 0 },
            { question: "What ions do non-metals form?", options: ["Positive ions", "Negative ions", "Neutral atoms", "Protons"], correct: 1 },
            { question: "What holds ionic compounds together?", options: ["Electrostatic forces between oppositely charged ions", "Covalent bonds", "Metallic bonds", "Hydrogen bonds"], correct: 0 },
            { question: "Why do ionic compounds have high melting points?", options: ["Strong ionic bonds require lots of energy to break", "Weak bonds", "Metallic bonds", "They are gases"], correct: 0 },
            // Medium
            { question: "What is the structure of an ionic compound?", options: ["Giant lattice", "Simple molecule", "Layered structure", "Random arrangement"], correct: 0 },
            { question: "Which of these is an example of an ionic compound?", options: ["Sodium chloride", "Water", "Oxygen gas", "Methane"], correct: 0 },
            { question: "What is the charge on a sodium ion (Na) in NaCl?", options: ["+1", "-1", "0", "+2"], correct: 0 },
            { question: "What is the charge on a chloride ion (Cl) in NaCl?", options: ["-1", "+1", "0", "-2"], correct: 0 },
            { question: "Why do ionic compounds conduct electricity when molten or dissolved?", options: ["Ions are free to move", "Electrons are free to move", "Atoms are free to move", "They don't conduct"], correct: 0 },
            // Hard
            { question: "What is the formula of magnesium chloride?", options: ["MgCl2", "MgCl", "Mg2Cl", "Mg2Cl2"], correct: 0 },
            { question: "What is the formula of calcium oxide?", options: ["CaO", "Ca2O", "CaO2", "Ca2O2"], correct: 0 },
            { question: "How does the size of the ions affect the strength of ionic bonding?", options: ["Smaller ions form stronger bonds", "Larger ions form stronger bonds", "Size has no effect", "Larger ions are always positive"], correct: 0 },
            { question: "What is a polyatomic ion?", options: ["An ion made of more than one atom", "A single atom ion", "A neutral molecule", "A molecule with no charge"], correct: 0 },
            { question: "Which of these is a polyatomic ion?", options: ["SO4^2-", "Na+", "Cl-", "O2-"], correct: 0 }
          ],
          terms: [
            { term: "Ionic bond", definition: "The electrostatic attraction between oppositely charged ions." },
            { term: "Cation", definition: "A positively charged ion formed by losing electrons." },
            { term: "Anion", definition: "A negatively charged ion formed by gaining electrons." },
            { term: "Electrostatic attraction", definition: "The force between oppositely charged ions." },
            { term: "Giant ionic lattice", definition: "A regular 3D arrangement of ions held together by ionic bonds." },
            { term: "Formula unit", definition: "The simplest ratio of ions represented in an ionic compound." },
            { term: "Polyatomic ion", definition: "An ion made up of more than one atom (e.g., SO4^2-, NO3^-, CO3^2-)." },
            { term: "Solubility", definition: "The ability of a substance to dissolve in water." },
            { term: "Melting point", definition: "The temperature at which a solid becomes a liquid." },
            { term: "Electrical conductivity", definition: "The ability of a substance to conduct electricity." },
            { term: "Empirical formula", definition: "The simplest whole number ratio of atoms or ions in a compound." }
          ]
        },
        "Covalent bonding": {
          quiz: [
            // Easy
            { question: "What is a covalent bond?", options: ["A bond formed by sharing electrons", "A bond formed by transferring electrons", "A metallic bond", "An ionic bond"], correct: 0 },
            { question: "Which atoms share electrons in covalent bonding?", options: ["Non-metal atoms", "Metal atoms", "Metals and non-metals", "Noble gases"], correct: 0 },
            { question: "How many electrons are shared in a single covalent bond?", options: ["Two", "One", "Four", "Six"], correct: 0 },
            { question: "What is a molecule?", options: ["A group of atoms held together by covalent bonds", "A group of ions", "A single atom", "A metal lattice"], correct: 0 },
            { question: "Which molecule contains a double covalent bond?", options: ["Oxygen (O2)", "Hydrogen (H2)", "Nitrogen (N2)", "Methane (CH4)"], correct: 0 },
            // Medium
            { question: "What is the shape of methane (CH4)?", options: ["Tetrahedral", "Linear", "Trigonal planar", "Bent"], correct: 0 },
            { question: "Why do simple molecular substances have low melting points?", options: ["Weak intermolecular forces", "Strong bonds", "Metallic bonding", "Ionic bonding"], correct: 0 },
            { question: "Which of these is a giant covalent structure?", options: ["Diamond", "Water", "Sodium chloride", "Methane"], correct: 0 },
            { question: "What is the formula of ammonia?", options: ["NH3", "NH4", "N2H4", "NO3"], correct: 0 },
            { question: "Which of these is NOT a property of diamond?", options: ["Conducts electricity", "Very hard", "High melting point", "Giant covalent structure"], correct: 0 },
            // Hard
            { question: "What is the structure of graphite?", options: ["Layers of carbon atoms with delocalised electrons", "Tetrahedral network", "Ionic lattice", "Simple molecule"], correct: 0 },
            { question: "Why does graphite conduct electricity?", options: ["Delocalised electrons move between layers", "Ions move freely", "It is a metal", "It has a giant ionic structure"], correct: 0 },
            { question: "What is a dative covalent bond?", options: ["A bond where both electrons come from one atom", "A bond formed by transferring electrons", "A metallic bond", "A bond between ions"], correct: 0 },
            { question: "Which molecule is linear?", options: ["CO2", "H2O", "NH3", "CH4"], correct: 0 },
            { question: "What is the bond angle in methane (CH4)?", options: ["109.5°", "120°", "180°", "90°"], correct: 0 }
          ],
          terms: [
            { term: "Covalent bond", definition: "A chemical bond formed by sharing electrons between atoms." },
            { term: "Molecule", definition: "A group of atoms held together by covalent bonds." },
            { term: "Single bond", definition: "A covalent bond sharing one pair of electrons." },
            { term: "Double bond", definition: "A covalent bond sharing two pairs of electrons." },
            { term: "Triple bond", definition: "A covalent bond sharing three pairs of electrons." },
            { term: "Intermolecular forces", definition: "Weak forces between molecules." },
            { term: "Giant covalent structure", definition: "A large network of atoms joined by covalent bonds (e.g., diamond, graphite, silicon dioxide)." },
            { term: "Dative covalent bond", definition: "A covalent bond where both electrons come from the same atom." },
            { term: "Bond angle", definition: "The angle between two bonds at an atom (e.g., 109.5° in methane)." },
            { term: "Delocalised electrons", definition: "Electrons that are not associated with a single atom or bond and can move freely." },
            { term: "Allotrope", definition: "Different structural forms of the same element (e.g., diamond and graphite for carbon)." }
          ]
        },
        "Types of substances": {
          quiz: [
            // Easy
            { question: "Which of these is a giant ionic structure?", options: ["Sodium chloride", "Water", "Oxygen gas", "Methane"], correct: 0 },
            { question: "What is a giant covalent structure?", options: ["A network of atoms covalently bonded in 3D", "A small molecule", "An ionic lattice", "A metal lattice"], correct: 0 },
            { question: "Which of these conducts electricity when solid?", options: ["Metal", "Ionic compound", "Covalent compound", "Gas"], correct: 0 },
            { question: "Why do metals conduct electricity?", options: ["Because of delocalised electrons", "Because of ions", "Because of covalent bonds", "Because of their mass"], correct: 0 },
            { question: "Which type of substance has a low melting point?", options: ["Simple molecular", "Giant ionic", "Metal", "Giant covalent"], correct: 0 },
            // Medium
            { question: "What is metallic bonding?", options: ["Attraction between positive ions and delocalised electrons", "Sharing of electrons", "Transfer of electrons", "No bonding"], correct: 0 },
            { question: "Which of these is a property of metals?", options: ["Malleable", "Brittle", "Low melting point", "Poor conductor"], correct: 0 },
            { question: "Which of these is a property of ionic compounds?", options: ["High melting point", "Conducts electricity when solid", "Soft", "Low melting point"], correct: 0 },
            { question: "Which of these is a property of simple molecular substances?", options: ["Low melting point", "High melting point", "Conducts electricity", "Giant lattice"], correct: 0 },
            { question: "Which of these is a property of giant covalent substances?", options: ["Very hard", "Low melting point", "Soft", "Conducts electricity"], correct: 0 },
            // Hard
            { question: "Why do ionic compounds not conduct electricity when solid?", options: ["Ions are fixed in place", "Electrons are free to move", "Atoms are free to move", "They are metals"], correct: 0 },
            { question: "Why is graphite soft and slippery?", options: ["Layers can slide over each other", "Strong covalent bonds", "Ionic bonds", "High melting point"], correct: 0 },
            { question: "Why does diamond not conduct electricity?", options: ["No free electrons", "Delocalised electrons", "Ions are free to move", "It is a metal"], correct: 0 },
            { question: "What is the structure of a metal?", options: ["Giant lattice of positive ions with delocalised electrons", "Simple molecule", "Ionic lattice", "Giant covalent structure"], correct: 0 },
            { question: "Which of these is NOT a property of metals?", options: ["Brittle", "Malleable", "Ductile", "Good conductor"], correct: 0 }
          ],
          terms: [
            { term: "Giant ionic structure", definition: "A 3D lattice of ions held together by ionic bonds." },
            { term: "Giant covalent structure", definition: "A large network of atoms joined by covalent bonds." },
            { term: "Simple molecular", definition: "Small molecules held together by weak intermolecular forces." },
            { term: "Metallic bonding", definition: "The attraction between positive metal ions and delocalised electrons." },
            { term: "Malleable", definition: "Can be hammered or rolled into shape without breaking." },
            { term: "Ductile", definition: "Can be drawn into wires." },
            { term: "Electrical conductivity", definition: "The ability of a substance to conduct electricity." },
            { term: "Melting point", definition: "The temperature at which a solid becomes a liquid." },
            { term: "Delocalised electrons", definition: "Electrons that are free to move throughout a structure." },
            { term: "Lattice", definition: "A regular, repeating arrangement of particles." },
            { term: "Hardness", definition: "Resistance to being scratched or dented." }
          ]
        },
        "Calculations involving masses": {
          quiz: [
            // Easy
            { question: "What is the formula to calculate relative formula mass (Mr)?", options: ["Sum of relative atomic masses", "Number of atoms", "Mass of one atom", "Number of molecules"], correct: 0 },
            { question: "What is the unit for amount of substance?", options: ["Mole", "Gram", "Liter", "Atom"], correct: 0 },
            { question: "What is Avogadro's number?", options: ["6.02 x 10^23", "1.00 x 10^6", "1.00 x 10^3", "3.14 x 10^2"], correct: 0 },
            { question: "What is the symbol for relative atomic mass?", options: ["Ar", "Mr", "Na", "A"], correct: 0 },
            { question: "What is the symbol for relative formula mass?", options: ["Mr", "Ar", "Na", "A"], correct: 0 },
            // Medium
            { question: "How many moles are in 36g of water (Mr = 18)?", options: ["2", "18", "36", "0.5"], correct: 0 },
            { question: "If 2 moles of CO2 weigh 88g, what is the Mr of CO2?", options: ["44", "22", "88", "176"], correct: 0 },
            { question: "What is the formula to calculate moles from mass and Mr?", options: ["moles = mass / Mr", "moles = Mr / mass", "moles = mass x Mr", "moles = mass + Mr"], correct: 0 },
            { question: "What is the percentage by mass of oxygen in H2O (H=1, O=16)?", options: ["89%", "11%", "50%", "33%"], correct: 0 },
            { question: "How many atoms are in 2 moles of carbon atoms?", options: ["1.204 x 10^24", "6.02 x 10^23", "3.01 x 10^23", "2.00 x 10^23"], correct: 0 },
            // Hard
            { question: "What is the empirical formula of a compound with 12g of C and 2g of H? (C=12, H=1)", options: ["CH2", "C2H", "CH", "C2H2"], correct: 0 },
            { question: "A sample contains 0.5 moles of NaCl. How many formula units is this?", options: ["3.01 x 10^23", "6.02 x 10^23", "1.00 x 10^23", "1.20 x 10^24"], correct: 0 },
            { question: "What is the percentage by mass of sodium in NaCl? (Na=23, Cl=35.5)", options: ["39.3%", "60.7%", "50%", "23%"], correct: 0 },
            { question: "How many moles are in 12g of carbon (Ar = 12)?", options: ["1", "12", "0.5", "6"], correct: 0 },
            { question: "What is the mass of 0.25 moles of H2O (Mr = 18)?", options: ["4.5g", "9g", "18g", "2.25g"], correct: 0 }
          ],
          terms: [
            { term: "Relative atomic mass (Ar)", definition: "The weighted average mass of an atom compared to 1/12 of a carbon-12 atom." },
            { term: "Relative formula mass (Mr)", definition: "The sum of the relative atomic masses of all atoms in a formula." },
            { term: "Mole", definition: "The amount of substance containing 6.02 × 10²³ particles." },
            { term: "Avogadro's number", definition: "The number of particles in one mole (6.02 x 10^23)." },
            { term: "Empirical formula", definition: "The simplest whole number ratio of atoms in a compound." },
            { term: "Molecular formula", definition: "The actual number of atoms of each element in a molecule." },
            { term: "Percentage by mass", definition: "The proportion by mass of a particular element in a compound." },
            { term: "Formula unit", definition: "The simplest ratio of ions represented in an ionic compound." },
            { term: "Concentration", definition: "The amount of solute per unit volume of solution." },
            { term: "Stoichiometry", definition: "The calculation of reactants and products in chemical reactions." },
            { term: "Limiting reactant", definition: "The reactant that is completely used up first in a reaction, limiting the amount of product formed." }
          ]
        }
      }
    },
    // Topic 2: States of matter and mixtures (Edexcel Spec)
    "2. States of matter and mixtures": {
      subtopics: {
        "States of matter": {
          quiz: [
            // Easy
            { question: "How are particles arranged in a solid?", options: ["Closely packed in a fixed pattern", "Spread far apart and moving freely", "Close but able to slide past each other", "Randomly arranged"], correct: 0 },
            { question: "How are particles arranged in a liquid?", options: ["Close together but able to move past each other", "Fixed in a regular pattern", "Far apart and random", "Stationary"], correct: 0 },
            { question: "How are particles arranged in a gas?", options: ["Far apart and random", "Closely packed in a fixed pattern", "Close together but can slide", "Fixed in a regular pattern"], correct: 0 },
            { question: "What is the movement of particles in a solid?", options: ["Vibrate in fixed positions", "Move freely in all directions", "Slide past each other", "Stationary"], correct: 0 },
            { question: "What is the movement of particles in a liquid?", options: ["Slide past each other", "Vibrate in fixed positions", "Move freely in all directions", "Stationary"], correct: 0 },
            { question: "What is the movement of particles in a gas?", options: ["Move rapidly in all directions", "Vibrate in fixed positions", "Slide past each other", "Stationary"], correct: 0 },
            // Medium
            { question: "Which state of matter has the highest density?", options: ["Solid", "Liquid", "Gas"], correct: 0 },
            { question: "Which state of matter has the highest energy particles?", options: ["Gas", "Liquid", "Solid"], correct: 0 },
            { question: "What is the term for the change from solid to liquid?", options: ["Melting", "Freezing", "Evaporation", "Condensation"], correct: 0 },
            { question: "What is the term for the change from liquid to gas?", options: ["Evaporation", "Melting", "Freezing", "Condensation"], correct: 0 },
            { question: "What is the term for the change from gas to liquid?", options: ["Condensation", "Melting", "Freezing", "Sublimation"], correct: 0 },
            { question: "What is the term for the change from liquid to solid?", options: ["Freezing", "Melting", "Condensation", "Sublimation"], correct: 0 },
            { question: "What is sublimation?", options: ["Solid to gas without passing through liquid", "Liquid to gas", "Solid to liquid", "Gas to liquid"], correct: 0 },
            // Hard
            { question: "Why do solids have a fixed shape?", options: ["Particles are held in fixed positions by strong forces", "Particles move freely", "Particles are far apart", "Particles are weakly attracted"], correct: 0 },
            { question: "Why can gases be compressed easily?", options: ["Particles are far apart with lots of space between them", "Particles are closely packed", "Particles are fixed", "Particles are strongly attracted"], correct: 0 },
            { question: "Why do liquids flow but solids do not?", options: ["Particles in liquids can move past each other", "Particles in solids are free to move", "Liquids have no forces between particles", "Solids have no particles"], correct: 0 },
            { question: "What happens to the energy of particles as a solid is heated?", options: ["Increases, causing more vibration and eventually melting", "Decreases, causing freezing", "Stays the same", "Particles disappear"], correct: 0 },
            { question: "Which state of matter fills the shape and volume of its container?", options: ["Gas", "Solid", "Liquid"], correct: 0 }
          ],
          terms: [
            { term: "Solid", definition: "A state of matter with a fixed shape and volume; particles vibrate in fixed positions and are closely packed." },
            { term: "Liquid", definition: "A state of matter with a fixed volume but no fixed shape; particles are close together but can move past each other." },
            { term: "Gas", definition: "A state of matter with no fixed shape or volume; particles are far apart and move freely in all directions." },
            { term: "Particle model", definition: "A scientific model used to explain the properties and behavior of solids, liquids, and gases in terms of particles." },
            { term: "Melting", definition: "The process of changing from a solid to a liquid by heating." },
            { term: "Freezing", definition: "The process of changing from a liquid to a solid by cooling." },
            { term: "Boiling", definition: "The process of changing from a liquid to a gas throughout the liquid at its boiling point." },
            { term: "Evaporation", definition: "The process of changing from a liquid to a gas at the surface, below the boiling point." },
            { term: "Condensation", definition: "The process of changing from a gas to a liquid by cooling." },
            { term: "Sublimation", definition: "The process where a solid changes directly to a gas without becoming a liquid first." },
            { term: "Deposition", definition: "The process where a gas changes directly to a solid without becoming a liquid first." },
            { term: "Density", definition: "A measure of how much mass is contained in a given volume; solids are usually denser than liquids, which are denser than gases." },
            { term: "Compressibility", definition: "The ability of a substance to decrease in volume under pressure; gases are highly compressible, liquids and solids are not." },
            { term: "Intermolecular forces", definition: "Forces of attraction between particles; strongest in solids, weaker in liquids, weakest in gases." },
            { term: "Kinetic energy", definition: "The energy of motion; particles in gases have the most kinetic energy, followed by liquids, then solids." }
          ]
        },
        "Methods of separating and purifying substances": {
          quiz: [
            // Easy
            { question: "Which technique separates substances based on different boiling points?", options: ["Simple distillation", "Filtration", "Crystallisation", "Paper chromatography"], correct: 0 },
            { question: "Which method is best for separating an insoluble solid from a liquid?", options: ["Filtration", "Crystallisation", "Simple distillation", "Chromatography"], correct: 0 },
            { question: "Which method is best for separating a soluble solid from a solution?", options: ["Crystallisation", "Filtration", "Simple distillation", "Chromatography"], correct: 0 },
            { question: "What is the stationary phase in paper chromatography?", options: ["The paper", "The solvent", "The mixture", "The container"], correct: 0 },
            { question: "What is the mobile phase in paper chromatography?", options: ["The solvent", "The paper", "The ink", "The beaker"], correct: 0 },
            // Medium
            { question: "What does an Rf value represent in chromatography?", options: ["Ratio of distance travelled by substance to distance travelled by solvent", "Boiling point", "Density", "Concentration"], correct: 0 },
            { question: "Which method separates a mixture of liquids with different boiling points?", options: ["Fractional distillation", "Filtration", "Crystallisation", "Paper chromatography"], correct: 0 },
            { question: "What is the purpose of crystallisation?", options: ["To obtain pure solid crystals from a solution", "To separate liquids", "To filter solids", "To measure boiling point"], correct: 0 },
            { question: "Why is a pencil used to draw the baseline in chromatography?", options: ["Pencil does not dissolve in the solvent", "Pencil is colourful", "Pen is more accurate", "It reacts with the ink"], correct: 0 },
            { question: "What is the main difference between simple and fractional distillation?", options: ["Fractional distillation separates mixtures of liquids", "Simple distillation separates mixtures of solids", "Fractional distillation uses a filter", "Simple distillation uses chromatography paper"], correct: 0 },
            // Hard
            { question: "How can you separate a mixture of sand, salt, and water?", options: ["Filtration, then crystallisation", "Chromatography, then distillation", "Distillation, then filtration", "Crystallisation, then filtration"], correct: 0 },
            { question: "Why must the solvent level be below the baseline in chromatography?", options: ["So the samples do not dissolve directly into the solvent", "To increase speed of separation", "To make spots larger", "No importance"], correct: 0 },
            { question: "What would happen if you used a pen to draw the baseline in chromatography?", options: ["The ink would dissolve and interfere with results", "Nothing would happen", "The paper would dissolve", "The solvent would evaporate"], correct: 0 },
            { question: "What is the advantage of fractional distillation over simple distillation?", options: ["It can separate mixtures of liquids with similar boiling points", "It is faster", "It uses less energy", "It is used for solids only"], correct: 0 },
            { question: "What does a pure substance show on a chromatogram?", options: ["A single spot", "Multiple spots", "No spots", "A line"], correct: 0 }
          ],
          terms: [
            { term: "Filtration", definition: "A technique to separate insoluble solids from liquids using filter paper." },
            { term: "Simple distillation", definition: "A method to separate a liquid from a solution by boiling and condensing the vapor." },
            { term: "Fractional distillation", definition: "A method to separate a mixture of liquids with different boiling points using a fractionating column." },
            { term: "Crystallisation", definition: "A technique to obtain pure solid crystals from a solution by evaporating the solvent." },
            { term: "Paper chromatography", definition: "A method for separating mixtures of soluble substances based on their movement through paper." },
            { term: "Stationary phase", definition: "The phase that does not move in chromatography (e.g., the paper)." },
            { term: "Mobile phase", definition: "The phase that moves in chromatography (e.g., the solvent)." },
            { term: "Rf value", definition: "A ratio used to identify substances in chromatography, calculated as distance moved by substance divided by distance moved by solvent." },
            { term: "Baseline", definition: "The line drawn on chromatography paper where samples are initially placed." },
            { term: "Solvent front", definition: "The furthest point reached by the solvent in chromatography." },
            { term: "Residue", definition: "The solid left behind on the filter paper after filtration." },
            { term: "Filtrate", definition: "The liquid that passes through the filter paper during filtration." },
            { term: "Pure substance", definition: "A substance made of only one type of particle with a fixed melting and boiling point." },
            { term: "Mixture", definition: "A combination of two or more substances that are not chemically bonded and can be separated by physical methods." }
          ]
        },
        "Water purification": {
          quiz: [
            // Easy
            { question: "What process removes solid particles from water before chlorination?", options: ["Sedimentation and filtration", "Distillation", "Crystallisation", "Chromatography"], correct: 0 },
            { question: "Why is chlorination used in water treatment?", options: ["To kill harmful microorganisms", "To remove solids", "To soften water", "To remove salts"], correct: 0 },
            { question: "How can sea water be made potable?", options: ["Distillation", "Filtration", "Chromatography", "Crystallisation"], correct: 0 },
            { question: "What is sedimentation in water purification?", options: ["Solids settle due to gravity", "Filtering particles out", "Adding chemicals to kill bacteria", "Boiling water"], correct: 0 },
            { question: "What is potable water?", options: ["Water that is safe to drink", "Water with high salt content", "Water from the sea", "Water with added chlorine"], correct: 0 },
            // Medium
            { question: "What is the main purpose of filtration in water treatment?", options: ["To remove suspended solids", "To kill bacteria", "To add minerals", "To remove gases"], correct: 0 },
            { question: "Why is distillation not commonly used for large-scale water purification?", options: ["It requires a lot of energy", "It is too fast", "It does not remove solids", "It adds chlorine"], correct: 0 },
            { question: "What is the main source of drinking water in most countries?", options: ["Surface water and groundwater", "Sea water", "Distilled water", "Rainwater only"], correct: 0 },
            { question: "What is the effect of adding chlorine to water?", options: ["Kills bacteria and pathogens", "Removes solids", "Makes water hard", "Removes gases"], correct: 0 },
            { question: "What is the main difference between potable and pure water?", options: ["Potable water may contain dissolved substances, pure water does not", "Potable water is always distilled", "Pure water contains chlorine", "Potable water is unsafe to drink"], correct: 0 },
            // Hard
            { question: "How can you test if water is pure?", options: ["Check for a fixed boiling point at 100°C", "Taste it", "Add chlorine", "Check for colour"], correct: 0 },
            { question: "What is the main disadvantage of using distillation to produce potable water from sea water?", options: ["High energy cost", "It is too slow", "It does not remove bacteria", "It adds minerals"], correct: 0 },
            { question: "Why is it important to remove suspended solids before chlorination?", options: ["Solids can react with chlorine and reduce its effectiveness", "Solids make water taste better", "Chlorine is not needed", "Solids are harmless"], correct: 0 },
            { question: "What is the role of sedimentation tanks in water treatment?", options: ["Allow solids to settle out by gravity", "Add chlorine", "Remove dissolved gases", "Increase water temperature"], correct: 0 },
            { question: "What is the final step in the treatment of drinking water?", options: ["Chlorination", "Filtration", "Sedimentation", "Distillation"], correct: 0 }
          ],
          terms: [
            { term: "Sedimentation", definition: "The process where solids settle out of water due to gravity." },
            { term: "Filtration", definition: "Removing suspended solids by passing water through a filter." },
            { term: "Chlorination", definition: "Adding chlorine to water to kill bacteria and other pathogens." },
            { term: "Potable water", definition: "Water that is safe to drink." },
            { term: "Distillation", definition: "A process of purifying water by boiling and condensing the steam, removing dissolved solids and salts." },
            { term: "Suspended solids", definition: "Small solid particles that do not dissolve in water and can be removed by filtration or sedimentation." },
            { term: "Pathogen", definition: "A microorganism that can cause disease, such as bacteria or viruses." },
            { term: "Groundwater", definition: "Water found underground in rocks and soil, often used as a source of drinking water." },
            { term: "Surface water", definition: "Water found in rivers, lakes, and reservoirs, used as a source of drinking water." },
            { term: "Pure water", definition: "Water that contains only H2O molecules and no dissolved substances; boils at exactly 100°C." },
            { term: "Desalination", definition: "The process of removing salts from sea water to make it potable, often by distillation or reverse osmosis." },
            { term: "Reverse osmosis", definition: "A process that uses a membrane to remove ions and molecules from water, used in desalination." }
          ]
        },
        "Core practical: Investigate the composition of inks": {
          quiz: [
            // Easy
            { question: "Which two techniques can be used to analyse ink composition?", options: ["Simple distillation and paper chromatography", "Filtration and crystallisation", "Fractional distillation and sedimentation", "Chromatography and crystallisation"], correct: 0 },
            { question: "What does paper chromatography separate ink components based on?", options: ["Solubility and affinity for stationary phase", "Boiling point", "Density", "Colour only"], correct: 0 },
            { question: "Why is it important to place the ink spots above the solvent level in chromatography?", options: ["To prevent ink dissolving directly into solvent", "To increase speed of separation", "To make spots larger", "No importance"], correct: 0 },
            { question: "What is the stationary phase in paper chromatography?", options: ["The paper", "The solvent", "The ink", "The beaker"], correct: 0 },
            { question: "What is the mobile phase in paper chromatography?", options: ["The solvent", "The paper", "The ink", "The beaker"], correct: 0 },
            // Medium
            { question: "What is the baseline in chromatography?", options: ["The line where samples are placed", "The top of the paper", "The solvent front", "The edge of the beaker"], correct: 0 },
            { question: "Why is a pencil used to draw the baseline in chromatography?", options: ["Pencil does not dissolve in the solvent", "Pencil is colourful", "Pen is more accurate", "It reacts with the ink"], correct: 0 },
            { question: "What does a pure substance show on a chromatogram?", options: ["A single spot", "Multiple spots", "No spots", "A line"], correct: 0 },
            { question: "What does an Rf value represent in chromatography?", options: ["Ratio of distance travelled by substance to distance travelled by solvent", "Boiling point", "Density", "Concentration"], correct: 0 },
            { question: "What is the solvent front in chromatography?", options: ["The furthest point reached by the solvent", "The baseline", "The top of the paper", "The ink spot"], correct: 0 },
            // Hard
            { question: "What would happen if the solvent level is above the ink spots in chromatography?", options: ["The ink would dissolve into the solvent and not separate properly", "The separation would be faster", "The spots would be larger", "No effect"], correct: 0 },
            { question: "How can you use chromatography to compare two inks?", options: ["Compare the number and position of spots on the chromatogram", "Taste the inks", "Measure the boiling point", "Check the density"], correct: 0 },
            { question: "Why is it important to use a lid during chromatography?", options: ["To prevent solvent evaporation", "To increase temperature", "To make spots larger", "To dissolve the ink faster"], correct: 0 },
            { question: "How do you calculate the Rf value in chromatography?", options: ["Distance moved by substance divided by distance moved by solvent", "Distance moved by solvent divided by distance moved by substance", "Distance from baseline to top of paper", "Distance from baseline to beaker"], correct: 0 },
            { question: "What does it mean if two spots on a chromatogram have the same Rf value?", options: ["They are likely the same substance", "They are different substances", "They have different solubilities", "They have different colours"], correct: 0 }
          ],
          terms: [
            { term: "Chromatography", definition: "A technique for separating mixtures based on movement through a medium." },
            { term: "Paper chromatography", definition: "A method for separating mixtures of soluble substances using paper as the stationary phase." },
            { term: "Stationary phase", definition: "The phase that does not move in chromatography (e.g., the paper)." },
            { term: "Mobile phase", definition: "The phase that moves in chromatography (e.g., the solvent)." },
            { term: "Baseline", definition: "The line drawn on chromatography paper where samples are initially placed." },
            { term: "Solvent front", definition: "The furthest point reached by the solvent in chromatography." },
            { term: "Rf value", definition: "A ratio used to identify substances in chromatography, calculated as distance moved by substance divided by distance moved by solvent." },
            { term: "Pure substance", definition: "A substance that produces a single spot on a chromatogram." },
            { term: "Mixture", definition: "A substance that produces two or more spots on a chromatogram, indicating more than one component." },
            { term: "Ink", definition: "A mixture of dyes that can be separated by chromatography." },
            { term: "Solubility", definition: "The ability of a substance to dissolve in a solvent, affecting how far it travels in chromatography." }
          ]
        }
      }
    },
    // Topic 3: Chemical changes (Edexcel Spec)
    "3. Chemical changes": {
      subtopics: {
        "Acids and alkalis": {
          quiz: [
            // Easy
            { question: "What ions do acids release in solution?", options: ["Hydrogen ions (H+)", "Hydroxide ions (OH–)", "Sodium ions (Na+)", "Chloride ions (Cl–)"], correct: 0 },
            { question: "What ions do alkalis release in solution?", options: ["Hydroxide ions (OH–)", "Hydrogen ions (H+)", "Sodium ions (Na+)", "Chloride ions (Cl–)"], correct: 0 },
            { question: "What pH value is neutral?", options: ["7", "0", "14", "1"], correct: 0 },
            { question: "What colour does litmus turn in an acid?", options: ["Red", "Blue", "Green", "Yellow"], correct: 0 },
            { question: "What colour does litmus turn in an alkali?", options: ["Blue", "Red", "Green", "Yellow"], correct: 0 },
            // Medium
            { question: "If the hydrogen ion concentration increases by a factor of 10, what happens to the pH?", options: ["It decreases by 1", "It increases by 1", "It stays the same", "It doubles"], correct: 0 },
            { question: "What is a strong acid?", options: ["An acid that fully dissociates into ions", "An acid that partially dissociates", "An acid with pH 7", "An acid that is diluted"], correct: 0 },
            { question: "What is a weak acid?", options: ["An acid that partially dissociates in solution", "An acid that fully dissociates", "An acid with pH 7", "An acid that is concentrated"], correct: 0 },
            { question: "What is the pH range of acids?", options: ["0-6", "7-14", "7", "1-14"], correct: 0 },
            { question: "What is the pH range of alkalis?", options: ["8-14", "0-6", "7", "1-7"], correct: 0 },
            // Hard
            { question: "What is the ionic equation for neutralisation?", options: ["H+ + OH– → H2O", "Na+ + Cl– → NaCl", "H+ + Cl– → HCl", "OH– + Na+ → NaOH"], correct: 0 },
            { question: "Why does a strong acid have a lower pH than a weak acid of the same concentration?", options: ["It produces more H+ ions in solution", "It is more concentrated", "It is a better conductor", "It is a gas"], correct: 0 },
            { question: "What is the effect of dilution on the pH of an acid?", options: ["pH increases (becomes less acidic)", "pH decreases (becomes more acidic)", "No effect", "pH becomes neutral"], correct: 0 },
            { question: "What is a base?", options: ["A substance that neutralises an acid to form a salt and water", "A substance that produces H+ ions", "A substance with pH 7", "A substance that is always soluble"], correct: 0 },
            { question: "What is the difference between a base and an alkali?", options: ["An alkali is a soluble base", "A base is always soluble", "There is no difference", "A base is always an acid"], correct: 0 }
          ],
          terms: [
            { term: "Acid", definition: "A substance that produces hydrogen ions (H+) in aqueous solution." },
            { term: "Alkali", definition: "A soluble base that produces hydroxide ions (OH–) in aqueous solution." },
            { term: "Base", definition: "A substance that neutralises an acid to form a salt and water." },
            { term: "pH scale", definition: "A scale from 0 to 14 measuring how acidic or alkaline a solution is; 7 is neutral." },
            { term: "Neutralisation", definition: "A reaction between an acid and a base producing salt and water." },
            { term: "Strong acid", definition: "An acid that fully dissociates in solution, releasing all its H+ ions." },
            { term: "Weak acid", definition: "An acid that only partially dissociates in solution, releasing some of its H+ ions." },
            { term: "Strong alkali", definition: "An alkali that fully dissociates in solution, releasing all its OH– ions." },
            { term: "Weak alkali", definition: "An alkali that only partially dissociates in solution, releasing some of its OH– ions." },
            { term: "Concentration", definition: "The amount of solute dissolved in a given volume of solution." },
            { term: "Dissociation", definition: "The process by which an acid or alkali splits into ions in solution." },
            { term: "Indicator", definition: "A chemical that changes colour to show whether a solution is acidic or alkaline." },
            { term: "Ionic equation for neutralisation", definition: "H+ + OH– → H2O." }
          ]
        },
        "Preparing salts and titrations": {
          quiz: [
            // Easy
            { question: "Why is excess insoluble reactant added when preparing a salt?", options: ["To ensure all acid reacts", "To increase yield", "To change pH", "To produce gas"], correct: 0 },
            { question: "Why must titration be used when both reactants are soluble?", options: ["To mix in correct proportions", "To heat the solution", "To cool the solution", "To change colour"], correct: 0 },
            { question: "Which equipment is used to accurately measure volumes during titration?", options: ["Burette and pipette", "Beaker and funnel", "Test tube and stirring rod", "Measuring cylinder and spatula"], correct: 0 },
            { question: "What is the indicator used in acid-alkali titration?", options: ["Phenolphthalein", "Methyl orange", "Litmus", "Bromothymol blue"], correct: 0 },
            { question: "What is a salt?", options: ["An ionic compound formed from the positive ion of a base and the negative ion of an acid", "A covalent compound", "A metal oxide", "A gas"], correct: 0 },
            // Medium
            { question: "What is the purpose of filtering the mixture after reacting an acid with an insoluble base?", options: ["To remove excess solid base", "To remove water", "To add more acid", "To neutralise the acid"], correct: 0 },
            { question: "Why is the solution heated after filtration in salt preparation?", options: ["To evaporate water and crystallise the salt", "To dissolve the salt", "To add more acid", "To cool the solution"], correct: 0 },
            { question: "What is the end point in a titration?", options: ["When the indicator changes colour", "When the solution boils", "When all acid is used up", "When the solution is filtered"], correct: 0 },
            { question: "Why is a white tile used under the flask during titration?", options: ["To see the colour change more clearly", "To heat the solution", "To prevent spillage", "To increase reaction speed"], correct: 0 },
            { question: "What is the purpose of repeating titrations until concordant results are obtained?", options: ["To improve accuracy and reliability", "To use more acid", "To use more indicator", "To make the solution more concentrated"], correct: 0 },
            // Hard
            { question: "What is the role of a burette in titration?", options: ["To accurately deliver variable volumes of solution", "To measure mass", "To filter the solution", "To heat the solution"], correct: 0 },
            { question: "Why is it important to add the acid from the burette slowly near the end point?", options: ["To avoid overshooting the end point", "To speed up the reaction", "To cool the solution", "To use more indicator"], correct: 0 },
            { question: "What is a concordant result in titration?", options: ["Two or more titres within 0.10 cm³ of each other", "Any two results", "Results that are exactly the same", "Results that are more than 1 cm³ apart"], correct: 0 },
            { question: "What is the purpose of washing down the sides of the flask with distilled water during titration?", options: ["To ensure all reactants are mixed and react", "To dilute the solution", "To cool the solution", "To add more acid"], correct: 0 },
            { question: "What is the main reason for using a pipette in titration?", options: ["To accurately measure a fixed volume of solution", "To heat the solution", "To filter the solution", "To add indicator"], correct: 0 }
          ],
          terms: [
            { term: "Titration", definition: "A method to find the exact volume of acid or alkali needed for neutralisation." },
            { term: "Salt", definition: "An ionic compound formed from the positive ion of a base and the negative ion of an acid." },
            { term: "Excess reactant", definition: "The reactant added in surplus to ensure complete reaction of the other reactant." },
            { term: "Indicator", definition: "A chemical that changes colour to show the end of a titration." },
            { term: "Burette", definition: "A piece of apparatus used to accurately deliver variable volumes of solution in titration." },
            { term: "Pipette", definition: "A piece of apparatus used to accurately measure a fixed volume of solution." },
            { term: "End point", definition: "The stage in a titration when the indicator changes colour, showing neutralisation is complete." },
            { term: "Concordant results", definition: "Two or more titres within 0.10 cm³ of each other, indicating reliable results." },
            { term: "Crystallisation", definition: "A process to obtain pure solid crystals from a solution by evaporating the solvent." },
            { term: "Filtration", definition: "A technique to separate insoluble solids from liquids using filter paper." },
            { term: "Titre", definition: "The volume of solution delivered from the burette to reach the end point in a titration." },
            { term: "White tile", definition: "A tile placed under the flask during titration to make it easier to see the colour change." }
          ]
        },
        "Solubility rules and precipitates": {
          quiz: [
            // Easy
            { question: "Which salts are generally soluble in water?", options: ["Sodium, potassium and ammonium salts", "Lead salts", "Barium salts", "Calcium salts"], correct: 0 },
            { question: "Which common salts are generally insoluble?", options: ["Lead, barium and calcium sulfates", "Sodium, potassium salts", "Nitrates", "Ammonium salts"], correct: 0 },
            { question: "What indicates a precipitate has formed?", options: ["A solid appears in solution", "Solution changes colour", "Gas is produced", "Temperature rises"], correct: 0 },
            { question: "What is a precipitate?", options: ["An insoluble solid formed in a solution", "A gas formed", "A liquid formed", "A soluble salt"], correct: 0 },
            { question: "What is solubility?", options: ["The ability of a substance to dissolve in a solvent", "The ability to conduct electricity", "The ability to form a gas", "The ability to react with acids"], correct: 0 },
            // Medium
            { question: "Which of these is a soluble salt?", options: ["Potassium nitrate", "Silver chloride", "Barium sulfate", "Lead iodide"], correct: 0 },
            { question: "Which of these is an insoluble salt?", options: ["Silver chloride", "Sodium nitrate", "Potassium sulfate", "Ammonium chloride"], correct: 0 },
            { question: "What is the general rule for the solubility of nitrates?", options: ["All nitrates are soluble", "All nitrates are insoluble", "Only sodium nitrate is soluble", "Only potassium nitrate is soluble"], correct: 0 },
            { question: "What is the general rule for the solubility of chlorides?", options: ["Most chlorides are soluble except silver and lead(II) chloride", "All chlorides are insoluble", "Only sodium chloride is soluble", "All chlorides are soluble"], correct: 0 },
            { question: "What is the general rule for the solubility of sulfates?", options: ["Most sulfates are soluble except barium, calcium and lead(II) sulfate", "All sulfates are insoluble", "Only sodium sulfate is soluble", "All sulfates are soluble"], correct: 0 },
            // Hard
            { question: "How can you make an insoluble salt?", options: ["By mixing two solutions to form a precipitate", "By evaporating a solution", "By distillation", "By filtration only"], correct: 0 },
            { question: "What is the test for sulfate ions?", options: ["Add barium chloride; a white precipitate forms if sulfate is present", "Add silver nitrate; a yellow precipitate forms", "Add hydrochloric acid; a gas is produced", "Add sodium hydroxide; a blue precipitate forms"], correct: 0 },
            { question: "What is the test for chloride ions?", options: ["Add silver nitrate; a white precipitate forms", "Add barium chloride; a white precipitate forms", "Add sodium hydroxide; a blue precipitate forms", "Add hydrochloric acid; a gas is produced"], correct: 0 },
            { question: "What is the test for carbonate ions?", options: ["Add dilute acid; carbon dioxide gas is produced", "Add silver nitrate; a white precipitate forms", "Add barium chloride; a white precipitate forms", "Add sodium hydroxide; a blue precipitate forms"], correct: 0 },
            { question: "What is the name of the process where an insoluble solid forms from two solutions?", options: ["Precipitation", "Filtration", "Crystallisation", "Distillation"], correct: 0 }
          ],
          terms: [
            { term: "Precipitate", definition: "An insoluble solid formed when two solutions react." },
            { term: "Solubility", definition: "The ability of a substance to dissolve in a solvent." },
            { term: "Soluble", definition: "A substance that dissolves in a solvent." },
            { term: "Insoluble", definition: "A substance that does not dissolve in a solvent." },
            { term: "Precipitation", definition: "A reaction in which an insoluble solid forms when two solutions are mixed." },
            { term: "Solubility rules", definition: "Guidelines that predict whether a salt is soluble or insoluble in water." },
            { term: "Nitrate", definition: "All nitrates are soluble in water." },
            { term: "Chloride", definition: "Most chlorides are soluble except silver and lead(II) chloride." },
            { term: "Sulfate", definition: "Most sulfates are soluble except barium, calcium and lead(II) sulfate." },
            { term: "Carbonate", definition: "Most carbonates are insoluble except those of sodium, potassium and ammonium." },
            { term: "Test for sulfate", definition: "Add barium chloride; a white precipitate indicates sulfate ions." },
            { term: "Test for chloride", definition: "Add silver nitrate; a white precipitate indicates chloride ions." },
            { term: "Test for carbonate", definition: "Add dilute acid; effervescence and carbon dioxide gas indicate carbonate ions." }
          ]
        },
        "Electrolysis": {
          quiz: [
            // Easy
            { question: "What is an electrolyte?", options: ["An ionic compound melted or dissolved in water that conducts electricity", "A metal", "A solvent", "An element"], correct: 0 },
            { question: "In electrolysis, where do cations move?", options: ["To the cathode (negative electrode)", "To the anode (positive electrode)", "Randomly", "They don't move"], correct: 0 },
            { question: "What is produced at the cathode during the electrolysis of copper sulfate with inert electrodes?", options: ["Copper metal", "Oxygen gas", "Hydrogen gas", "Chlorine gas"], correct: 0 },
            { question: "What happens at the anode during electrolysis?", options: ["Oxidation occurs", "Reduction occurs", "No reaction", "Electrons are gained"], correct: 0 },
            { question: "What is the charge on the cathode?", options: ["Negative", "Positive", "Neutral", "No charge"], correct: 0 },
            // Medium
            { question: "What is the charge on the anode?", options: ["Positive", "Negative", "Neutral", "No charge"], correct: 0 },
            { question: "Why do ionic compounds conduct electricity only when molten or in solution?", options: ["Ions are free to move", "Electrons are free to move", "Atoms are free to move", "They don't conduct"], correct: 0 },
            { question: "What is the product at the anode during the electrolysis of sodium chloride solution?", options: ["Chlorine gas", "Hydrogen gas", "Sodium metal", "Oxygen gas"], correct: 0 },
            { question: "What is the product at the cathode during the electrolysis of sodium chloride solution?", options: ["Hydrogen gas", "Chlorine gas", "Sodium metal", "Oxygen gas"], correct: 0 },
            { question: "What is the process called when a substance loses electrons?", options: ["Oxidation", "Reduction", "Electrolysis", "Neutralisation"], correct: 0 },
            // Hard
            { question: "What is the process called when a substance gains electrons?", options: ["Reduction", "Oxidation", "Electrolysis", "Neutralisation"], correct: 0 },
            { question: "Why is electrolysis used to extract aluminium from its ore?", options: ["Aluminium is too reactive to be extracted by reduction with carbon", "It is less expensive", "It is a gas at room temperature", "It is a non-metal"], correct: 0 },
            { question: "What is the half-equation for the reaction at the cathode during the electrolysis of molten lead bromide?", options: ["Pb2+ + 2e– → Pb", "Br– → Br2 + 2e–", "Pb → Pb2+ + 2e–", "Br2 + 2e– → 2Br–"], correct: 0 },
            { question: "What is the half-equation for the reaction at the anode during the electrolysis of molten lead bromide?", options: ["2Br– → Br2 + 2e–", "Pb2+ + 2e– → Pb", "Br2 + 2e– → 2Br–", "Pb → Pb2+ + 2e–"], correct: 0 },
            { question: "What is the main use of electrolysis in industry?", options: ["Extraction and purification of metals", "Measuring pH", "Making alloys", "Testing for gases"], correct: 0 }
          ],
          terms: [
            { term: "Electrolysis", definition: "The breakdown of an ionic compound using electricity." },
            { term: "Electrolyte", definition: "An ionic compound in molten or aqueous solution that conducts electricity." },
            { term: "Cathode", definition: "The negative electrode where reduction occurs." },
            { term: "Anode", definition: "The positive electrode where oxidation occurs." },
            { term: "Oxidation", definition: "Loss of electrons." },
            { term: "Reduction", definition: "Gain of electrons." },
            { term: "Cation", definition: "A positively charged ion that moves to the cathode during electrolysis." },
            { term: "Anion", definition: "A negatively charged ion that moves to the anode during electrolysis." },
            { term: "Half-equation", definition: "An equation showing the gain or loss of electrons during a redox reaction at an electrode." },
            { term: "Inert electrode", definition: "An electrode that does not react during electrolysis (e.g., graphite or platinum)." },
            { term: "Discharge", definition: "The process by which ions gain or lose electrons at electrodes to form atoms or molecules." },
            { term: "Extraction of metals", definition: "The use of electrolysis to obtain metals that are too reactive to be extracted by reduction with carbon." }
          ]
        },
        "Core Practicals": {
          quiz: [
            // Easy
            { question: "What practical might you do to investigate oxidation and reduction?", options: ["Burning elements in oxygen", "Distillation", "Paper chromatography", "Filtration"], correct: 0 },
            { question: "What is a competition reaction between metals?", options: ["A displacement reaction showing reactivity differences", "A reaction that produces gas", "An acid-base reaction", "A neutralisation reaction"], correct: 0 },
            { question: "What is the main observation when magnesium is added to copper(II) sulfate solution?", options: ["Copper is deposited and the solution fades", "A gas is produced", "No reaction", "The solution turns green"], correct: 0 },
            { question: "What is the main safety precaution when heating metals in oxygen?", options: ["Wear eye protection and use tongs", "Use bare hands", "Work in a dark room", "Taste the metal"], correct: 0 },
            { question: "What is the purpose of using a water bath in some metal extraction practicals?", options: ["To provide gentle, even heating", "To cool the reaction", "To dissolve the metal", "To increase reactivity"], correct: 0 },
            // Medium
            { question: "Why is it important to use clean, dry test tubes in displacement reactions?", options: ["To avoid contamination and ensure accurate results", "To increase reaction speed", "To make the solution more concentrated", "To use less metal"], correct: 0 },
            { question: "What is the purpose of using a control in a practical?", options: ["To compare results and ensure validity", "To increase yield", "To use more chemicals", "To make the reaction faster"], correct: 0 },
            { question: "What is the main observation when iron is added to copper(II) sulfate solution?", options: ["A brown solid (copper) forms", "A gas is produced", "No reaction", "The solution turns blue"], correct: 0 },
            { question: "Why is it important to record the mass of metals before and after a reaction?", options: ["To measure the amount of metal displaced or reacted", "To increase accuracy", "To use more chemicals", "To make the reaction faster"], correct: 0 },
            { question: "What is the main reason for repeating practicals?", options: ["To improve reliability and identify anomalies", "To use more chemicals", "To make the reaction faster", "To increase yield"], correct: 0 },
            // Hard
            { question: "What is the main variable to control in a displacement practical?", options: ["Concentration of solutions and mass of metals", "Colour of the solution", "Type of beaker", "Room temperature only"], correct: 0 },
            { question: "What is the main reason for using a fume cupboard when heating some metals?", options: ["To avoid inhaling toxic fumes", "To increase reaction speed", "To use more chemicals", "To make the solution more concentrated"], correct: 0 },
            { question: "What is the main observation when zinc is added to lead(II) nitrate solution?", options: ["A grey solid (lead) forms", "A gas is produced", "No reaction", "The solution turns green"], correct: 0 },
            { question: "Why is it important to label all test tubes in a practical?", options: ["To avoid confusion and ensure correct results", "To increase reaction speed", "To use more chemicals", "To make the solution more concentrated"], correct: 0 },
            { question: "What is the main reason for using tongs when handling hot metals?", options: ["To avoid burns and injury", "To increase reaction speed", "To use more chemicals", "To make the solution more concentrated"], correct: 0 }
          ],
          terms: [
            { term: "Core practical", definition: "A required practical activity specified by the exam board." },
            { term: "Displacement reaction", definition: "A reaction where a more reactive metal displaces a less reactive metal from its compound." },
            { term: "Oxidation", definition: "Loss of electrons or gain of oxygen." },
            { term: "Reduction", definition: "Gain of electrons or loss of oxygen." },
            { term: "Control variable", definition: "A variable that is kept constant to ensure a fair test in a practical." },
            { term: "Observation", definition: "A record of what is seen, heard, or measured during a practical." },
            { term: "Reliability", definition: "The consistency of results when a practical is repeated." },
            { term: "Anomaly", definition: "A result that does not fit the pattern of the other results." },
            { term: "Fume cupboard", definition: "A ventilated enclosure used to carry out experiments that produce hazardous fumes." },
            { term: "Tongs", definition: "A tool used to hold hot equipment or materials safely." },
            { term: "Water bath", definition: "A container of hot water used to heat substances gently and evenly." }
          ]
        },
        "Energy changes in reactions": {
          quiz: [
            // Easy
            { question: "What is an exothermic reaction?", options: ["A reaction that releases energy to the surroundings", "A reaction that absorbs energy", "A reaction that produces a gas", "A reaction that forms a precipitate"], correct: 0 },
            { question: "What is an endothermic reaction?", options: ["A reaction that absorbs energy from the surroundings", "A reaction that releases energy", "A reaction that produces a gas", "A reaction that forms a precipitate"], correct: 0 },
            { question: "What happens to the temperature of the surroundings in an exothermic reaction?", options: ["It increases", "It decreases", "It stays the same", "It fluctuates"], correct: 0 },
            { question: "What happens to the temperature of the surroundings in an endothermic reaction?", options: ["It decreases", "It increases", "It stays the same", "It fluctuates"], correct: 0 },
            { question: "Which of these is an example of an exothermic reaction?", options: ["Combustion", "Photosynthesis", "Thermal decomposition", "Electrolysis"], correct: 0 },
            // Medium
            { question: "Which of these is an example of an endothermic reaction?", options: ["Thermal decomposition", "Combustion", "Neutralisation", "Respiration"], correct: 0 },
            { question: "What is the energy profile diagram for an exothermic reaction?", options: ["Products have less energy than reactants", "Products have more energy than reactants", "Products and reactants have the same energy", "Energy stays constant"], correct: 0 },
            { question: "What is the energy profile diagram for an endothermic reaction?", options: ["Products have more energy than reactants", "Products have less energy than reactants", "Products and reactants have the same energy", "Energy stays constant"], correct: 0 },
            { question: "What is activation energy?", options: ["The minimum energy needed for a reaction to occur", "The energy released in a reaction", "The energy of the products", "The energy of the reactants"], correct: 0 },
            { question: "What is the effect of a catalyst on activation energy?", options: ["Lowers it", "Raises it", "No effect", "Removes it"], correct: 0 },
            // Hard
            { question: "What is the sign of the enthalpy change (ΔH) for an exothermic reaction?", options: ["Negative", "Positive", "Zero", "It varies"], correct: 0 },
            { question: "What is the sign of the enthalpy change (ΔH) for an endothermic reaction?", options: ["Positive", "Negative", "Zero", "It varies"], correct: 0 },
            { question: "What is meant by bond energy?", options: ["The energy required to break one mole of a bond in a molecule", "The energy released when a bond forms", "The energy of the products", "The energy of the reactants"], correct: 0 },
            { question: "How is the overall energy change in a reaction calculated using bond energies?", options: ["Energy to break bonds - energy released making bonds", "Energy released making bonds - energy to break bonds", "Energy of products - energy of reactants", "Energy of reactants - energy of products"], correct: 0 },
            { question: "What is a typical use of an endothermic reaction?", options: ["Instant cold packs", "Hand warmers", "Combustion", "Respiration"], correct: 0 }
          ],
          terms: [
            { term: "Exothermic reaction", definition: "A reaction that releases energy to the surroundings, usually as heat." },
            { term: "Endothermic reaction", definition: "A reaction that absorbs energy from the surroundings." },
            { term: "Energy profile diagram", definition: "A graph showing the energy changes during a chemical reaction." },
            { term: "Activation energy", definition: "The minimum energy required for a reaction to occur." },
            { term: "Enthalpy change (ΔH)", definition: "The overall energy change in a reaction; negative for exothermic, positive for endothermic." },
            { term: "Bond energy", definition: "The energy required to break one mole of a specific bond in a molecule." },
            { term: "Catalyst", definition: "A substance that lowers the activation energy and increases the rate of a reaction without being used up." },
            { term: "Combustion", definition: "A chemical reaction in which a substance reacts with oxygen, releasing energy (exothermic)." },
            { term: "Thermal decomposition", definition: "A reaction in which a compound is broken down by heat (endothermic)." },
            { term: "Neutralisation", definition: "A reaction between an acid and a base, usually exothermic." },
            { term: "Instant cold pack", definition: "A product that uses an endothermic reaction to absorb heat and provide cooling." },
            { term: "Hand warmer", definition: "A product that uses an exothermic reaction to release heat and provide warmth." }
          ]
        },
      }
    },
    // Topic 4: Extracting metals and equilibria (Edexcel Spec)
    "4. Extracting metals and equilibria": {
      subtopics: {
        "Reactivity of metals": {
          quiz: [
            // Easy
            { question: "What type of reaction occurs when a metal displaces another metal from its salt solution?", options: ["Displacement reaction", "Neutralisation", "Precipitation", "Combustion"], correct: 0 },
            { question: "Which metal is most reactive among these: potassium, copper, gold?", options: ["Potassium", "Copper", "Gold", "All equally reactive"], correct: 0 },
            { question: "Why is hydrogen included in the reactivity series?", options: ["To compare the reactivity of metals with hydrogen", "Because it is a metal", "Because it reacts with carbon", "It is the least reactive element"], correct: 0 },
            { question: "What is corrosion?", options: ["The slow chemical reaction of metals with oxygen and water", "The melting of metals", "The reduction of metals", "The process of electrolysis"], correct: 0 },
            { question: "Which metal is least reactive: potassium, iron, copper, magnesium?", options: ["Copper", "Potassium", "Iron", "Magnesium"], correct: 0 },
            // Medium
            { question: "What is the order of reactivity for magnesium, zinc, and iron?", options: ["Magnesium > zinc > iron", "Iron > zinc > magnesium", "Zinc > magnesium > iron", "Iron > magnesium > zinc"], correct: 0 },
            { question: "What is observed when magnesium is added to copper(II) sulfate solution?", options: ["A displacement reaction occurs and copper is formed", "No reaction", "A gas is produced", "The solution turns green"], correct: 0 },
            { question: "What is the main reason for the trend in reactivity down Group 1?", options: ["Outer electron is more easily lost", "Atoms get smaller", "More protons in the nucleus", "Electrons are harder to remove"], correct: 0 },
            { question: "What is the main reason for the trend in reactivity down Group 7?", options: ["Atoms gain electrons less easily", "Atoms get smaller", "More protons in the nucleus", "Electrons are harder to remove"], correct: 0 },
            { question: "What is the effect of reactivity on the extraction method of a metal?", options: ["More reactive metals require electrolysis, less reactive can be reduced by carbon", "All metals are extracted by electrolysis", "All metals are found native", "Less reactive metals are harder to extract"], correct: 0 },
            // Hard
            { question: "What is the ionic equation for the displacement of copper by zinc?", options: ["Zn + Cu2+ → Zn2+ + Cu", "Cu + Zn2+ → Cu2+ + Zn", "Zn2+ + Cu → Zn + Cu2+", "Cu2+ + Zn2+ → Cu + Zn"], correct: 0 },
            { question: "Why does iron rust but aluminium does not corrode as quickly?", options: ["Aluminium forms a protective oxide layer", "Iron is more reactive", "Aluminium is less dense", "Iron is a transition metal"], correct: 0 },
            { question: "What is the effect of placing a less reactive metal in a solution of a more reactive metal's salt?", options: ["No reaction occurs", "A displacement reaction occurs", "A gas is produced", "The solution turns blue"], correct: 0 },
            { question: "What is the main environmental problem caused by corrosion of metals?", options: ["Loss of useful materials and structural damage", "Increased oxygen levels", "More carbon dioxide absorption", "Creation of new species"], correct: 0 },
            { question: "What is the reactivity series?", options: ["A list of metals in order of decreasing reactivity", "A list of non-metals", "A list of acids", "A list of salts"], correct: 0 }
          ],
          terms: [
            { term: "Reactivity series", definition: "A list of metals in order of decreasing reactivity." },
            { term: "Displacement reaction", definition: "A reaction where a more reactive metal displaces a less reactive metal from its compound." },
            { term: "Corrosion", definition: "The gradual destruction of metals by chemical reaction with oxygen and water." },
            { term: "Oxidation", definition: "Loss of electrons or gain of oxygen." },
            { term: "Reduction", definition: "Gain of electrons or loss of oxygen." },
            { term: "Native metal", definition: "A metal found in its pure, uncombined form in nature." },
            { term: "Protective oxide layer", definition: "A layer of oxide that forms on some metals (e.g., aluminium) and prevents further corrosion." },
            { term: "Rusting", definition: "The corrosion of iron, forming hydrated iron(III) oxide." },
            { term: "Extraction of metals", definition: "The process of obtaining metals from their ores, often influenced by their reactivity." },
            { term: "Ionic equation", definition: "An equation showing only the ions and atoms involved in a chemical reaction." },
            { term: "Salt solution", definition: "A solution containing dissolved ionic compounds." }
          ]
        },
        "Extraction of metals": {
          quiz: [
            // Easy
            { question: "What is the main method to extract metals less reactive than carbon?", options: ["Heating with carbon", "Electrolysis", "Distillation", "Crystallisation"], correct: 0 },
            { question: "How are metals more reactive than carbon usually extracted?", options: ["By electrolysis", "By heating with carbon", "By simple heating", "By precipitation"], correct: 0 },
            { question: "Why are unreactive metals like gold found in their native state?", options: ["Because they resist oxidation", "Because they dissolve easily", "Because they react with acids", "Because they are gases"], correct: 0 },
            { question: "Which metal is extracted by electrolysis of its molten ore?", options: ["Aluminium", "Iron", "Copper", "Gold"], correct: 0 },
            { question: "What is an ore?", options: ["A rock that contains enough metal compounds to make extraction worthwhile", "A pure metal", "A type of acid", "A type of salt"], correct: 0 },
            // Medium
            { question: "What is reduction in terms of oxygen?", options: ["Loss of oxygen from a substance", "Gain of oxygen", "Loss of electrons", "Gain of electrons"], correct: 0 },
            { question: "What is oxidation in terms of oxygen?", options: ["Gain of oxygen by a substance", "Loss of oxygen", "Gain of electrons", "Loss of electrons"], correct: 0 },
            { question: "What is the main advantage of recycling metals?", options: ["Saves energy and raw materials", "Increases mining", "Produces more waste", "Uses more electricity"], correct: 0 },
            { question: "What is phytoextraction?", options: ["Using plants to absorb metal compounds from the soil to be harvested", "Using bacteria to extract metals", "Using heat to extract metals", "Using water to dissolve metals"], correct: 0 },
            { question: "What is bioleaching?", options: ["Using bacteria to extract metals from ores", "Using plants to absorb metals", "Using heat to extract metals", "Using water to dissolve metals"], correct: 0 },
            // Hard
            { question: "Why is electrolysis more expensive than reduction with carbon?", options: ["It uses more energy/electricity", "It is slower", "It produces less metal", "It is less efficient"], correct: 0 },
            { question: "What is the main environmental problem with traditional metal extraction?", options: ["Air pollution and habitat destruction", "Increased oxygen levels", "More carbon dioxide absorption", "Creation of new species"], correct: 0 },
            { question: "What is a life cycle assessment?", options: ["A study of the environmental impact of a product from raw materials to disposal", "A study of the reactivity of metals", "A study of the melting points of metals", "A study of the uses of metals"], correct: 0 },
            { question: "What is the role of carbon in the extraction of iron from iron oxide?", options: ["It reduces iron oxide to iron", "It oxidises iron", "It acts as a catalyst", "It forms a salt"], correct: 0 },
            { question: "What is the main reason for using alternative methods like phytoextraction and bioleaching?", options: ["To reduce environmental impact and extract metals from low-grade ores", "To increase pollution", "To make metals more expensive", "To use more energy"], correct: 0 }
          ],
          terms: [
            { term: "Ore", definition: "A rock that contains enough metal compounds to make extraction worthwhile." },
            { term: "Reduction", definition: "The process of removing oxygen from a metal oxide to obtain the metal." },
            { term: "Oxidation", definition: "The process of gaining oxygen or losing electrons." },
            { term: "Electrolysis", definition: "The extraction of metals by passing an electric current through molten compounds." },
            { term: "Phytoextraction", definition: "Using plants to absorb metal compounds from the soil to be harvested." },
            { term: "Bioleaching", definition: "Using bacteria to extract metals from ores." },
            { term: "Native metal", definition: "A metal found in its pure, uncombined form in nature." },
            { term: "Recycling", definition: "Reprocessing used materials into new products." },
            { term: "Life cycle assessment", definition: "A study of the environmental impact of a product from raw materials to disposal." },
            { term: "Blast furnace", definition: "A large furnace used for extracting iron from iron ore using carbon." },
            { term: "Environmental impact", definition: "The effect of an activity or process on the environment, such as pollution or habitat destruction." }
          ]
        },
        "Environmental and economic considerations": {
          quiz: [
            // Easy
            { question: "Why is recycling metals beneficial?", options: ["Saves energy and raw materials", "Increases mining", "Produces more waste", "Uses more electricity"], correct: 0 },
            { question: "What does a life cycle assessment consider?", options: ["Environmental impact of raw materials, manufacturing, use, and disposal", "Only the manufacturing process", "Only the use of the product", "Only disposal of the product"], correct: 0 },
            { question: "What is the main environmental problem caused by mining metal ores?", options: ["Habitat destruction and pollution", "Increased oxygen levels", "More carbon dioxide absorption", "Creation of new species"], correct: 0 },
            { question: "What is sustainability?", options: ["Meeting the needs of the present without compromising future generations", "Using as many resources as possible", "Producing more waste", "Increasing mining"], correct: 0 },
            { question: "What is the main economic benefit of recycling metals?", options: ["Reduces costs of raw materials and energy", "Increases waste", "Increases mining", "Reduces product quality"], correct: 0 },
            // Medium
            { question: "What is a disadvantage of recycling metals?", options: ["Sorting and processing can be expensive and energy-intensive", "It always produces more pollution", "It increases mining", "It reduces product quality"], correct: 0 },
            { question: "What is the main environmental impact of extracting metals from low-grade ores?", options: ["More waste and pollution", "Less energy used", "No impact", "Increased biodiversity"], correct: 0 },
            { question: "What is the main economic consideration when choosing a metal extraction method?", options: ["Cost of energy and raw materials", "Colour of the metal", "Size of the ore", "Location of the mine"], correct: 0 },
            { question: "What is the main reason for using life cycle assessments?", options: ["To evaluate the total environmental impact of a product", "To increase mining", "To reduce recycling", "To increase costs"], correct: 0 },
            { question: "What is the main environmental benefit of using alternative extraction methods like phytoextraction?", options: ["Reduces pollution and energy use", "Increases waste", "Increases mining", "Reduces product quality"], correct: 0 },
            // Hard
            { question: "Why is it important to consider both environmental and economic factors in metal extraction?", options: ["To balance resource use, costs, and environmental impact", "To increase profits only", "To reduce product quality", "To increase mining"], correct: 0 },
            { question: "What is the main disadvantage of traditional mining methods?", options: ["Large amounts of waste and habitat destruction", "Low cost", "High efficiency", "No pollution"], correct: 0 },
            { question: "What is the main advantage of using recycled aluminium compared to extracting new aluminium?", options: ["Uses much less energy", "Increases mining", "Reduces product quality", "Increases pollution"], correct: 0 },
            { question: "What is the main economic impact of using low-grade ores for metal extraction?", options: ["Higher costs due to more processing required", "Lower costs", "No impact", "Increased product quality"], correct: 0 },
            { question: "What is the main reason for reducing the use of finite resources?", options: ["To ensure resources are available for future generations", "To increase mining", "To reduce costs", "To increase pollution"], correct: 0 }
          ],
          terms: [
            { term: "Recycling", definition: "Reprocessing used materials into new products." },
            { term: "Life cycle assessment", definition: "Evaluates the environmental impact of all stages of a product's life." },
            { term: "Sustainability", definition: "Meeting the needs of the present without compromising the ability of future generations to meet their own needs." },
            { term: "Environmental impact", definition: "The effect of an activity or process on the environment, such as pollution or habitat destruction." },
            { term: "Economic impact", definition: "The effect of an activity or process on the cost and availability of resources and products." },
            { term: "Finite resource", definition: "A resource that is limited and will eventually run out, such as metal ores." },
            { term: "Low-grade ore", definition: "Ore that contains a small amount of metal, requiring more processing and energy to extract the metal." },
            { term: "Alternative extraction", definition: "Methods such as phytoextraction and bioleaching used to extract metals from low-grade ores with less environmental impact." },
            { term: "Pollution", definition: "The introduction of harmful substances into the environment as a result of human activity." },
            { term: "Habitat destruction", definition: "The process by which natural habitat is damaged or destroyed, often due to mining or industrial activity." }
          ]
        },
        "Dynamic equilibria": {
          quiz: [
            // Easy
            { question: "What is meant by a reversible reaction?", options: ["A reaction that can go both forwards and backwards", "A reaction that only goes one way", "A reaction that produces a gas", "A reaction that is exothermic"], correct: 0 },
            { question: "What symbol is used to show a reversible reaction?", options: ["⇌", "→", "←", "= "], correct: 0 },
            { question: "What is dynamic equilibrium?", options: ["The forward and reverse reactions occur at the same rate", "Only the forward reaction occurs", "Only the reverse reaction occurs", "No reaction occurs"], correct: 0 },
            { question: "Where can dynamic equilibrium only be established?", options: ["In a closed system", "In an open system", "In a beaker", "In a test tube"], correct: 0 },
            { question: "What happens to the concentrations of reactants and products at equilibrium?", options: ["They remain constant", "They increase", "They decrease", "They fluctuate"], correct: 0 },
            // Medium
            { question: "What is Le Chatelier's principle?", options: ["If a system at equilibrium is disturbed, the system will adjust to counteract the disturbance", "The rate of reaction increases with temperature", "The concentration of reactants is always higher", "The system will stop reacting"], correct: 0 },
            { question: "What happens to the position of equilibrium if the concentration of a reactant is increased?", options: ["Shifts to the right (products)", "Shifts to the left (reactants)", "No change", "Reaction stops"], correct: 0 },
            { question: "What happens to the position of equilibrium if the temperature is increased in an exothermic reaction?", options: ["Shifts to the left (reactants)", "Shifts to the right (products)", "No change", "Reaction stops"], correct: 0 },
            { question: "What happens to the position of equilibrium if the pressure is increased in a reaction involving gases?", options: ["Shifts to the side with fewer gas molecules", "Shifts to the side with more gas molecules", "No change", "Reaction stops"], correct: 0 },
            { question: "What is a closed system?", options: ["A system where no substances can enter or leave", "A system open to the air", "A system with only liquids", "A system with only solids"], correct: 0 },
            // Hard
            { question: "In the reaction N2(g) + 3H2(g) ⇌ 2NH3(g), what happens to the yield of ammonia if pressure is increased?", options: ["Yield increases", "Yield decreases", "No change", "Reaction stops"], correct: 0 },
            { question: "In the same reaction, what happens to the yield of ammonia if temperature is increased?", options: ["Yield decreases (because the forward reaction is exothermic)", "Yield increases", "No change", "Reaction stops"], correct: 0 },
            { question: "What is the effect of a catalyst on the position of equilibrium?", options: ["No effect on position, but equilibrium is reached faster", "Shifts to the right", "Shifts to the left", "Stops the reaction"], correct: 0 },
            { question: "What is meant by the term 'position of equilibrium'?", options: ["The relative amounts of reactants and products at equilibrium", "The speed of the reaction", "The temperature of the system", "The pressure of the system"], correct: 0 },
            { question: "Why must a system be closed for dynamic equilibrium to be established?", options: ["So that reactants and products cannot escape", "To allow gases to escape", "To increase temperature", "To increase pressure"], correct: 0 }
          ],
          terms: [
            { term: "Reversible reaction", definition: "A reaction that can proceed in both the forward and reverse directions." },
            { term: "Dynamic equilibrium", definition: "When the forward and reverse reactions occur at the same rate in a closed system." },
            { term: "Le Chatelier's principle", definition: "If a system at equilibrium is disturbed, the system will adjust to counteract the disturbance." },
            { term: "Closed system", definition: "A system where no substances can enter or leave." },
            { term: "Position of equilibrium", definition: "The relative amounts of reactants and products at equilibrium." },
            { term: "Exothermic reaction", definition: "A reaction that releases energy to the surroundings." },
            { term: "Endothermic reaction", definition: "A reaction that absorbs energy from the surroundings." },
            { term: "Catalyst", definition: "A substance that increases the rate of a reaction without being used up, and does not affect the position of equilibrium." },
            { term: "Yield", definition: "The amount of product formed in a chemical reaction." },
            { term: "Pressure (in equilibrium)", definition: "A factor that can affect the position of equilibrium in reactions involving gases." }
          ]
        }
      }
    },
    // Topic 5: Separate chemistry 1 (Edexcel Spec)
    "5. Separate chemistry 1": {
      subtopics: {
        "Transition metals, alloys and corrosion": {
          quiz: [
            // Easy
            { question: "Which property is NOT typical of most transition metals?", options: ["High melting point", "High density", "Formation of coloured compounds", "Low melting point"], correct: 3 },
            { question: "What causes the corrosion of metals?", options: ["Oxidation", "Reduction", "Combustion", "Neutralisation"], correct: 0 },
            { question: "Which method is NOT used to prevent rusting of iron?", options: ["Exclusion of oxygen", "Exclusion of water", "Sacrificial protection", "Heating with acid"], correct: 3 },
            { question: "Why are pure metals often alloyed?", options: ["To increase strength", "To decrease density", "To lower melting point", "To make them less reactive"], correct: 0 },
            { question: "What is electroplating used for?", options: ["Improve appearance and resistance to corrosion", "Increase electrical conductivity", "Extract metals from ores", "Produce alloys"], correct: 0 },
            // Medium
            { question: "What is an alloy?", options: ["A mixture of a metal with other elements", "A pure metal", "A type of corrosion", "A type of ore"], correct: 0 },
            { question: "Why are alloys harder than pure metals?", options: ["Different sized atoms distort layers, making it harder for them to slide", "They have more electrons", "They are less dense", "They are more reactive"], correct: 0 },
            { question: "What is sacrificial protection?", options: ["Using a more reactive metal to protect iron from rusting", "Painting the metal", "Coating with oil", "Heating with acid"], correct: 0 },
            { question: "Which metal is often used for sacrificial protection of iron?", options: ["Zinc", "Copper", "Gold", "Silver"], correct: 0 },
            { question: "What is the main cause of rusting in iron?", options: ["Reaction with oxygen and water", "Reaction with acids", "Reaction with carbon dioxide", "Reaction with salt only"], correct: 0 },
            // Hard
            { question: "What is the chemical formula for rust?", options: ["Fe2O3·xH2O", "FeO", "Fe3O4", "Fe(OH)2"], correct: 0 },
            { question: "Why do transition metals form coloured compounds?", options: ["They have partially filled d-subshells", "They are more reactive", "They are less dense", "They are always magnetic"], correct: 0 },
            { question: "What is the main advantage of using alloys over pure metals?", options: ["Improved properties such as strength and resistance to corrosion", "Lower cost", "Higher density", "Easier to melt"], correct: 0 },
            { question: "What is the process of coating iron with a layer of zinc called?", options: ["Galvanising", "Electroplating", "Anodising", "Alloying"], correct: 0 },
            { question: "What is the main reason for using electroplating?", options: ["To improve appearance and resistance to corrosion", "To increase melting point", "To make the metal magnetic", "To reduce density"], correct: 0 }
          ],
          terms: [
            { term: "Transition metals", definition: "Metals that form coloured compounds, have high melting points, high density and catalytic activity." },
            { term: "Corrosion", definition: "The oxidation of metals leading to their deterioration, e.g., rusting of iron." },
            { term: "Sacrificial protection", definition: "Using a more reactive metal to protect iron from rusting by corroding instead." },
            { term: "Alloy", definition: "A mixture of a metal with other elements to improve its properties, especially strength." },
            { term: "Electroplating", definition: "Coating an object with a thin layer of metal using electrolysis to improve appearance or corrosion resistance." },
            { term: "Galvanising", definition: "The process of coating iron or steel with a layer of zinc to prevent rusting." },
            { term: "Rusting", definition: "The corrosion of iron, forming hydrated iron(III) oxide." },
            { term: "Coloured compounds", definition: "Compounds formed by transition metals that are often brightly coloured due to d-electron transitions." },
            { term: "Catalyst", definition: "A substance that increases the rate of a chemical reaction without being used up, many transition metals act as catalysts." },
            { term: "Malleable", definition: "Can be hammered or rolled into shape without breaking, a property of most metals." },
            { term: "Ductile", definition: "Can be drawn into wires, a property of most metals." }
          ]
        },
        "Quantitative analysis": {
          quiz: [
            // Easy
            { question: "What is the unit for concentration in chemistry?", options: ["mol/dm³", "g/cm³", "kg/m³", "mol/L"], correct: 0 },
            { question: "What is the formula for calculating concentration?", options: ["Concentration = moles/volume", "Concentration = mass/volume", "Concentration = volume/moles", "Concentration = moles x volume"], correct: 0 },
            { question: "What is the volume of 1 mole of any gas at room temperature and pressure (RTP)?", options: ["24 dm³", "1 dm³", "22.4 dm³", "12 dm³"], correct: 0 },
            { question: "What is a standard solution?", options: ["A solution of known concentration", "A solution of unknown concentration", "A saturated solution", "A supersaturated solution"], correct: 0 },
            { question: "What is a titration used for?", options: ["To find the concentration of an acid or alkali", "To separate mixtures", "To test for gases", "To measure temperature"], correct: 0 },
            // Medium
            { question: "How do you calculate the number of moles from concentration and volume?", options: ["Moles = concentration x volume", "Moles = volume/concentration", "Moles = concentration + volume", "Moles = concentration - volume"], correct: 0 },
            { question: "If 25 cm³ of 0.2 mol/dm³ HCl reacts with NaOH, how many moles of HCl are present?", options: ["0.005 mol", "0.05 mol", "0.5 mol", "0.002 mol"], correct: 0 },
            { question: "What is the formula for percentage yield?", options: ["(Actual yield / Theoretical yield) x 100", "(Theoretical yield / Actual yield) x 100", "(Actual yield + Theoretical yield) x 100", "(Actual yield - Theoretical yield) x 100"], correct: 0 },
            { question: "What is the formula for atom economy?", options: ["(Mr of desired product / Total Mr of reactants) x 100", "(Total Mr of reactants / Mr of desired product) x 100", "(Mr of by-products / Mr of reactants) x 100", "(Mr of desired product / Mr of by-products) x 100"], correct: 0 },
            { question: "What is the main purpose of using a pipette in titration?", options: ["To accurately measure a fixed volume of solution", "To heat the solution", "To filter the solution", "To add indicator"], correct: 0 },
            // Hard
            { question: "A reaction has a theoretical yield of 10g and an actual yield of 8g. What is the percentage yield?", options: ["80%", "125%", "20%", "8%"], correct: 0 },
            { question: "If 0.1 mol of a gas occupies 2.4 dm³ at RTP, what is the volume of 1 mol?", options: ["24 dm³", "2.4 dm³", "12 dm³", "10 dm³"], correct: 0 },
            { question: "Why is atom economy important in industry?", options: ["It measures how efficiently reactants are converted into useful products", "It measures the speed of reaction", "It measures the purity of products", "It measures the cost of reactants"], correct: 0 },
            { question: "What is the main source of error in a titration?", options: ["Incorrect reading of the burette", "Using a white tile", "Using distilled water", "Using a pipette"], correct: 0 },
            { question: "How do you convert cm³ to dm³?", options: ["Divide by 1000", "Multiply by 1000", "Divide by 100", "Multiply by 100"], correct: 0 }
          ],
          terms: [
            { term: "Concentration", definition: "The amount of solute dissolved in a given volume of solution, usually in mol/dm³." },
            { term: "Standard solution", definition: "A solution of known concentration used in titrations." },
            { term: "Titration", definition: "A technique to determine the concentration of a solution by reacting it with a solution of known concentration." },
            { term: "Pipette", definition: "A piece of apparatus used to accurately measure a fixed volume of solution." },
            { term: "Burette", definition: "A piece of apparatus used to accurately deliver variable volumes of solution in titration." },
            { term: "Mole (mol)", definition: "The amount of substance containing 6.02 × 10²³ particles." },
            { term: "Molar volume", definition: "The volume occupied by one mole of a gas at RTP (24 dm³)." },
            { term: "Percentage yield", definition: "A measure of the efficiency of a reaction, calculated as (actual yield / theoretical yield) x 100." },
            { term: "Atom economy", definition: "A measure of how efficiently reactants are converted into useful products, calculated as (Mr of desired product / total Mr of reactants) x 100." },
            { term: "Theoretical yield", definition: "The maximum amount of product that can be formed from given amounts of reactants." },
            { term: "Actual yield", definition: "The amount of product actually obtained from a reaction." },
            { term: "RTP (Room Temperature and Pressure)", definition: "Standard conditions for gas calculations: 20°C and 1 atmosphere pressure." },
            { term: "Volumetric flask", definition: "A flask used to prepare solutions of precise volumes and concentrations." },
            { term: "Meniscus", definition: "The curved surface of a liquid in a measuring instrument; readings should be taken at the bottom of the meniscus." }
          ]
        },
        "Qualitative analysis: tests for ions and gases": {
          quiz: [
            // Easy
            { question: "What is the test for hydrogen gas?", options: ["Lit splint gives a squeaky pop", "Glowing splint relights", "Turns limewater milky", "Blue litmus turns red"], correct: 0 },
            { question: "What is the test for oxygen gas?", options: ["Glowing splint relights", "Lit splint gives a squeaky pop", "Turns limewater milky", "Blue litmus turns red"], correct: 0 },
            { question: "What is the test for carbon dioxide gas?", options: ["Turns limewater milky", "Glowing splint relights", "Lit splint gives a squeaky pop", "Blue litmus turns red"], correct: 0 },
            { question: "What is the test for chlorine gas?", options: ["Bleaches damp litmus paper", "Turns limewater milky", "Glowing splint relights", "Lit splint gives a squeaky pop"], correct: 0 },
            { question: "What is the test for ammonia gas?", options: ["Turns damp red litmus paper blue", "Turns limewater milky", "Glowing splint relights", "Lit splint gives a squeaky pop"], correct: 0 },
            // Medium
            { question: "What is the test for sulfate ions (SO4^2-)?", options: ["Add barium chloride; white precipitate forms", "Add silver nitrate; white precipitate forms", "Add dilute acid; effervescence", "Add sodium hydroxide; blue precipitate"], correct: 0 },
            { question: "What is the test for chloride ions (Cl-)?", options: ["Add silver nitrate; white precipitate forms", "Add barium chloride; white precipitate forms", "Add dilute acid; effervescence", "Add sodium hydroxide; blue precipitate"], correct: 0 },
            { question: "What is the test for carbonate ions (CO3^2-)?", options: ["Add dilute acid; carbon dioxide gas produced", "Add silver nitrate; white precipitate forms", "Add barium chloride; white precipitate forms", "Add sodium hydroxide; blue precipitate"], correct: 0 },
            { question: "What is the test for copper(II) ions (Cu^2+) in solution?", options: ["Add sodium hydroxide; blue precipitate forms", "Add barium chloride; white precipitate forms", "Add silver nitrate; white precipitate forms", "Add dilute acid; effervescence"], correct: 0 },
            { question: "What is the test for iron(II) ions (Fe^2+) in solution?", options: ["Add sodium hydroxide; green precipitate forms", "Add sodium hydroxide; brown precipitate forms", "Add barium chloride; white precipitate forms", "Add silver nitrate; white precipitate forms"], correct: 0 },
            // Hard
            { question: "What is the test for iron(III) ions (Fe^3+) in solution?", options: ["Add sodium hydroxide; brown precipitate forms", "Add sodium hydroxide; green precipitate forms", "Add barium chloride; white precipitate forms", "Add silver nitrate; white precipitate forms"], correct: 0 },
            { question: "What is the test for ammonium ions (NH4+)?", options: ["Add sodium hydroxide and warm; ammonia gas turns damp red litmus paper blue", "Add barium chloride; white precipitate forms", "Add silver nitrate; white precipitate forms", "Add dilute acid; effervescence"], correct: 0 },
            { question: "What is the test for sulfate ions (SO4^2-) in the presence of carbonate ions?", options: ["Add dilute acid first to remove carbonate, then barium chloride", "Add sodium hydroxide", "Add silver nitrate", "Add concentrated acid"], correct: 0 },
            { question: "What is the flame test colour for sodium ions (Na+)?", options: ["Yellow", "Red", "Green", "Blue"], correct: 0 },
            { question: "What is the flame test colour for potassium ions (K+)?", options: ["Lilac", "Yellow", "Red", "Green"], correct: 0 }
          ],
          terms: [
            { term: "Test for hydrogen", definition: "Lit splint gives a squeaky pop." },
            { term: "Test for oxygen", definition: "Glowing splint relights." },
            { term: "Test for carbon dioxide", definition: "Turns limewater milky/cloudy." },
            { term: "Test for chlorine", definition: "Bleaches damp litmus paper." },
            { term: "Test for ammonia", definition: "Turns damp red litmus paper blue." },
            { term: "Test for sulfate ions (SO4^2-)", definition: "Add barium chloride; white precipitate forms." },
            { term: "Test for chloride ions (Cl-)", definition: "Add silver nitrate; white precipitate forms." },
            { term: "Test for carbonate ions (CO3^2-)", definition: "Add dilute acid; carbon dioxide gas produced." },
            { term: "Test for copper(II) ions (Cu^2+)", definition: "Add sodium hydroxide; blue precipitate forms." },
            { term: "Test for iron(II) ions (Fe^2+)", definition: "Add sodium hydroxide; green precipitate forms." },
            { term: "Test for iron(III) ions (Fe^3+)", definition: "Add sodium hydroxide; brown precipitate forms." },
            { term: "Test for ammonium ions (NH4+)", definition: "Add sodium hydroxide and warm; ammonia gas turns damp red litmus paper blue." },
            { term: "Flame test for sodium (Na+)", definition: "Yellow flame." },
            { term: "Flame test for potassium (K+)", definition: "Lilac flame." },
            { term: "Flame test for calcium (Ca^2+)", definition: "Orange-red flame." },
            { term: "Flame test for copper (Cu^2+)", definition: "Green flame." },
            { term: "Precipitate", definition: "An insoluble solid formed in a solution during a chemical reaction." },
            { term: "Limewater", definition: "A solution of calcium hydroxide used to test for carbon dioxide." },
            { term: "Litmus paper", definition: "Indicator paper used to test for acids, alkalis, and gases like chlorine and ammonia." }
          ]
        },
        "Nanoparticles and their uses": {
          quiz: [
            // Easy
            { question: "What is a nanoparticle?", options: ["A particle with a size between 1 and 100 nanometres", "A particle larger than 1 micrometre", "A particle smaller than an atom", "A particle with a size between 1 and 100 micrometres"], correct: 0 },
            { question: "What is the typical size range of nanoparticles?", options: ["1-100 nanometres", "1-100 micrometres", "1-10 millimetres", "1-100 picometres"], correct: 0 },
            { question: "What is the main advantage of nanoparticles over bulk materials?", options: ["Large surface area to volume ratio", "Heavier", "More expensive", "Lower reactivity"], correct: 0 },
            { question: "Which of these is a common use of nanoparticles?", options: ["Sunscreens", "Food colouring", "Fertiliser", "Glass making"], correct: 0 },
            { question: "What is a potential risk of using nanoparticles?", options: ["Unknown effects on health and environment", "They are always safe", "They are too large to enter cells", "They are non-reactive"], correct: 0 },
            // Medium
            { question: "Why are nanoparticles used in medicine?", options: ["They can deliver drugs directly to cells", "They are always non-toxic", "They are cheaper than all medicines", "They are visible to the naked eye"], correct: 0 },
            { question: "Why are nanoparticles effective in sun creams?", options: ["They provide better UV protection and are transparent", "They are coloured", "They are less effective than bulk materials", "They are toxic"], correct: 0 },
            { question: "What is the main reason for the increased reactivity of nanoparticles?", options: ["Large surface area to volume ratio", "Small mass", "High density", "Low melting point"], correct: 0 },
            { question: "Which property makes nanoparticles useful as catalysts?", options: ["Large surface area", "High melting point", "Low density", "Colour"], correct: 0 },
            { question: "What is a concern about the use of nanoparticles in consumer products?", options: ["They may be toxic or cause environmental harm", "They are too expensive", "They are not effective", "They are too large"], correct: 0 },
            // Hard
            { question: "What is the difference between nanoparticles and bulk materials?", options: ["Nanoparticles have a much larger surface area to volume ratio", "Bulk materials are always more reactive", "Nanoparticles are heavier", "Bulk materials are smaller"], correct: 0 },
            { question: "How might nanoparticles enter the human body?", options: ["Through the skin, inhalation, or ingestion", "Only by injection", "Only by eating", "They cannot enter the body"], correct: 0 },
            { question: "Why is more research needed on the safety of nanoparticles?", options: ["Their effects on health and the environment are not fully understood", "They are always safe", "They are always toxic", "They are too large to cause harm"], correct: 0 },
            { question: "What is the main use of silver nanoparticles?", options: ["Antibacterial agents in wound dressings and coatings", "Food colouring", "Fertiliser", "Glass making"], correct: 0 },
            { question: "What is a nanometre (nm)?", options: ["One billionth of a metre (1 x 10^-9 m)", "One millionth of a metre (1 x 10^-6 m)", "One thousandth of a metre (1 x 10^-3 m)", "One hundredth of a metre (1 x 10^-2 m)"], correct: 0 }
          ],
          terms: [
            { term: "Nanoparticle", definition: "A particle with a size between 1 and 100 nanometres (nm)." },
            { term: "Nanometre (nm)", definition: "One billionth of a metre (1 x 10^-9 m)." },
            { term: "Surface area to volume ratio", definition: "A measure of how much surface area a particle has compared to its volume; much larger in nanoparticles than in bulk materials." },
            { term: "Bulk material", definition: "A material made up of many atoms or molecules, much larger than nanoparticles." },
            { term: "Catalyst", definition: "A substance that increases the rate of a chemical reaction without being used up; nanoparticles are often used as catalysts due to their large surface area." },
            { term: "Antibacterial agent", definition: "A substance that kills bacteria; silver nanoparticles are used for this purpose." },
            { term: "Drug delivery", definition: "The use of nanoparticles to transport medicines directly to targeted cells in the body." },
            { term: "Sunscreen", definition: "A cream or lotion that protects the skin from UV radiation; nanoparticles of titanium dioxide or zinc oxide are used for better protection and transparency." },
            { term: "Toxicity", definition: "The degree to which a substance can harm living organisms; a concern with some nanoparticles." },
            { term: "Environmental impact", definition: "The effect that the use or disposal of nanoparticles may have on the environment." },
            { term: "Medical imaging", definition: "The use of nanoparticles to improve the quality of images in medical scans." },
            { term: "Consumer products", definition: "Everyday items such as sun creams, clothing, and wound dressings that may contain nanoparticles." }
          ]
        }
      }
    },
    // Topic 6: Groups in the periodic table (Edexcel Spec)
    "6. Groups in the periodic table": {
      subtopics: {
        "Group 1 – The alkali metals": {
          quiz: [
            // Easy
            { question: "Where are the alkali metals found in the periodic table?", options: ["Group 1", "Group 2", "Group 7", "Group 0"], correct: 0 },
            { question: "Which of these is an alkali metal?", options: ["Sodium", "Calcium", "Chlorine", "Helium"], correct: 0 },
            { question: "What is the trend in reactivity down Group 1?", options: ["Increases", "Decreases", "Stays the same", "Varies randomly"], correct: 0 },
            { question: "What is the physical state of alkali metals at room temperature?", options: ["Solid", "Liquid", "Gas", "Plasma"], correct: 0 },
            { question: "What happens when alkali metals react with water?", options: ["They fizz and produce hydrogen gas", "They melt", "They turn blue", "They form a precipitate"], correct: 0 },
            // Medium
            { question: "What is the general formula for the reaction of an alkali metal with water?", options: ["2M + 2H2O → 2MOH + H2", "M + H2O → MO + H2", "M + H2O → MOH + H2O", "2M + H2O → 2MO + H2"], correct: 0 },
            { question: "What is observed when potassium reacts with water?", options: ["Lilac flame, rapid fizzing, moves on surface", "No reaction", "Turns red", "Forms a green precipitate"], correct: 0 },
            { question: "Why are alkali metals stored under oil?", options: ["To prevent reaction with air and moisture", "To keep them shiny", "To make them heavier", "To make them dissolve"], correct: 0 },
            { question: "What is the trend in melting point down Group 1?", options: ["Decreases", "Increases", "Stays the same", "Varies randomly"], correct: 0 },
            { question: "What is the product when sodium reacts with chlorine?", options: ["Sodium chloride", "Sodium hydroxide", "Sodium carbonate", "Sodium nitrate"], correct: 0 },
            // Hard
            { question: "Why does reactivity increase down Group 1?", options: ["Outer electron is further from nucleus and more easily lost", "Atoms get smaller", "More protons in the nucleus", "Electrons are harder to remove"], correct: 0 },
            { question: "What is the colour and texture of freshly cut alkali metals?", options: ["Shiny and silvery", "Dull and black", "Red and rough", "Blue and soft"], correct: 0 },
            { question: "What is the ionic charge of alkali metal ions?", options: ["+1", "-1", "+2", "0"], correct: 0 },
            { question: "What is the balanced equation for the reaction of lithium with water?", options: ["2Li + 2H2O → 2LiOH + H2", "Li + H2O → LiOH + H2", "2Li + H2O → 2LiO + H2", "Li + 2H2O → Li(OH)2 + H2"], correct: 0 },
            { question: "What is the trend in density down Group 1?", options: ["Increases", "Decreases", "Stays the same", "Varies randomly"], correct: 0 }
          ],
          terms: [
            { term: "Alkali metals", definition: "The elements in Group 1 of the periodic table: lithium, sodium, potassium, rubidium, caesium, and francium." },
            { term: "Group 1", definition: "The first column of the periodic table, containing the alkali metals." },
            { term: "Reactivity trend (Group 1)", definition: "Reactivity increases down the group as the outer electron is more easily lost." },
            { term: "Melting point trend (Group 1)", definition: "Melting point decreases down the group." },
            { term: "Density trend (Group 1)", definition: "Density increases down the group." },
            { term: "Softness", definition: "Alkali metals are soft and can be cut with a knife." },
            { term: "Reaction with water", definition: "Alkali metals react vigorously with water to produce a hydroxide and hydrogen gas." },
            { term: "Hydroxide", definition: "A compound containing the OH- ion; alkali metals form hydroxides when reacting with water." },
            { term: "Ionic charge (Group 1)", definition: "Alkali metals form ions with a +1 charge." },
            { term: "Storage under oil", definition: "Alkali metals are stored under oil to prevent reaction with air and moisture." },
            { term: "Shiny surface", definition: "Freshly cut alkali metals have a shiny, silvery surface that tarnishes quickly in air." },
            { term: "Vigorous reaction", definition: "Alkali metals react vigorously with water, especially further down the group." },
            { term: "Balanced equation", definition: "A chemical equation with equal numbers of each atom on both sides; e.g., 2Na + 2H2O → 2NaOH + H2." }
          ]
        },
        "Group 7 – The halogens": {
          quiz: [
            // Easy
            { question: "Where are the halogens found in the periodic table?", options: ["Group 7", "Group 1", "Group 0", "Group 2"], correct: 0 },
            { question: "Which of these is a halogen?", options: ["Chlorine", "Sodium", "Calcium", "Helium"], correct: 0 },
            { question: "What is the physical state of chlorine at room temperature?", options: ["Gas", "Solid", "Liquid", "Plasma"], correct: 0 },
            { question: "What is the trend in reactivity down Group 7?", options: ["Decreases", "Increases", "Stays the same", "Varies randomly"], correct: 0 },
            { question: "What colour is fluorine gas?", options: ["Pale yellow", "Green", "Red-brown", "Colourless"], correct: 0 },
            // Medium
            { question: "What is the colour and state of bromine at room temperature?", options: ["Red-brown liquid", "Green gas", "Grey solid", "Yellow gas"], correct: 0 },
            { question: "What is the colour and state of iodine at room temperature?", options: ["Grey solid", "Green gas", "Red-brown liquid", "Yellow gas"], correct: 0 },
            { question: "What is the general formula for the reaction of a halogen with hydrogen?", options: ["H2 + X2 → 2HX", "H2 + X2 → HX2", "H2 + X → HX", "2H2 + X2 → 2HX"], correct: 0 },
            { question: "What is a displacement reaction in Group 7?", options: ["A more reactive halogen displaces a less reactive halide from solution", "A less reactive halogen displaces a more reactive halide", "A halogen reacts with water", "A halogen reacts with a metal"], correct: 0 },
            { question: "What is the colour of chlorine water?", options: ["Pale green", "Red-brown", "Yellow", "Colourless"], correct: 0 },
            // Hard
            { question: "Why does reactivity decrease down Group 7?", options: ["Atoms gain electrons less easily as outer shell is further from nucleus", "Atoms get smaller", "More protons in the nucleus", "Electrons are more easily lost"], correct: 0 },
            { question: "What is the ionic charge of halide ions?", options: ["-1", "+1", "+2", "0"], correct: 0 },
            { question: "What is observed when chlorine is bubbled through potassium iodide solution?", options: ["Solution turns brown as iodine is displaced", "No reaction", "Solution turns green", "A gas is produced"], correct: 0 },
            { question: "What is the trend in boiling point down Group 7?", options: ["Increases", "Decreases", "Stays the same", "Varies randomly"], correct: 0 },
            { question: "What is the balanced equation for the reaction of bromine with potassium iodide?", options: ["Br2 + 2KI → 2KBr + I2", "Br2 + KI → KBr + I2", "Br2 + 2KI → 2KI + Br2", "Br2 + 2KBr → 2KI + Br2"], correct: 0 }
          ],
          terms: [
            { term: "Halogens", definition: "The elements in Group 7 of the periodic table: fluorine, chlorine, bromine, iodine, and astatine." },
            { term: "Group 7", definition: "The seventh column of the periodic table, containing the halogens." },
            { term: "Reactivity trend (Group 7)", definition: "Reactivity decreases down the group as atoms gain electrons less easily." },
            { term: "Boiling point trend (Group 7)", definition: "Boiling point increases down the group." },
            { term: "Displacement reaction", definition: "A reaction where a more reactive halogen displaces a less reactive halide from solution." },
            { term: "Halide ion", definition: "An ion formed when a halogen gains an electron (e.g., Cl-, Br-, I-)." },
            { term: "Diatomic molecule", definition: "A molecule consisting of two atoms; all halogens exist as diatomic molecules (e.g., Cl2)." },
            { term: "Chlorine water", definition: "A pale green solution of chlorine in water." },
            { term: "Bromine water", definition: "An orange solution of bromine in water." },
            { term: "Iodine solution", definition: "A brown solution of iodine in water." },
            { term: "Hydrogen halide", definition: "A compound formed when a halogen reacts with hydrogen (e.g., HCl, HBr, HI)." },
            { term: "Astatine", definition: "The rarest halogen, found at the bottom of Group 7." },
            { term: "Electron gain", definition: "Halogens react by gaining one electron to form a halide ion with a -1 charge." }
          ]
        },
        "Group 0 – The noble gases": {
          quiz: [
            // Easy
            { question: "Where are the noble gases found in the periodic table?", options: ["Group 0", "Group 1", "Group 7", "Group 2"], correct: 0 },
            { question: "Which of these is a noble gas?", options: ["Neon", "Chlorine", "Sodium", "Calcium"], correct: 0 },
            { question: "What is the general reactivity of noble gases?", options: ["Very unreactive", "Very reactive", "Moderately reactive", "Explosive"], correct: 0 },
            { question: "What is the physical state of noble gases at room temperature?", options: ["Gas", "Solid", "Liquid", "Plasma"], correct: 0 },
            { question: "What is the trend in boiling point down Group 0?", options: ["Increases", "Decreases", "Stays the same", "Varies randomly"], correct: 0 },
            // Medium
            { question: "Why are noble gases unreactive?", options: ["They have full outer electron shells", "They have no electrons", "They are metals", "They are radioactive"], correct: 0 },
            { question: "Which noble gas is used in advertising signs?", options: ["Neon", "Argon", "Helium", "Krypton"], correct: 0 },
            { question: "Which noble gas is used in balloons and airships?", options: ["Helium", "Neon", "Argon", "Xenon"], correct: 0 },
            { question: "What is the trend in density down Group 0?", options: ["Increases", "Decreases", "Stays the same", "Varies randomly"], correct: 0 },
            { question: "Which noble gas is used in light bulbs to prevent the filament from burning?", options: ["Argon", "Neon", "Helium", "Radon"], correct: 0 },
            // Hard
            { question: "Why does the boiling point increase down Group 0?", options: ["Stronger intermolecular forces as atoms get larger", "Weaker intermolecular forces", "Atoms get smaller", "Atoms become more reactive"], correct: 0 },
            { question: "What is the electron configuration of neon?", options: ["2,8", "2,8,8", "2,7", "2,8,1"], correct: 0 },
            { question: "Which noble gas is radioactive?", options: ["Radon", "Neon", "Argon", "Krypton"], correct: 0 },
            { question: "What is the main use of xenon?", options: ["In car headlights and flash lamps", "In balloons", "In advertising signs", "In welding"], correct: 0 },
            { question: "What is the main use of krypton?", options: ["In lasers and some photographic flashes", "In balloons", "In advertising signs", "In welding"], correct: 0 }
          ],
          terms: [
            { term: "Noble gases", definition: "The elements in Group 0 of the periodic table: helium, neon, argon, krypton, xenon, and radon." },
            { term: "Group 0", definition: "The last column of the periodic table, containing the noble gases." },
            { term: "Full outer shell", definition: "Noble gases have a complete outer shell of electrons, making them very stable and unreactive." },
            { term: "Unreactive", definition: "Noble gases do not readily form compounds due to their stable electron configuration." },
            { term: "Boiling point trend (Group 0)", definition: "Boiling point increases down the group as atoms get larger and intermolecular forces increase." },
            { term: "Density trend (Group 0)", definition: "Density increases down the group." },
            { term: "Helium", definition: "A noble gas used in balloons and airships because it is lighter than air and non-flammable." },
            { term: "Neon", definition: "A noble gas used in advertising signs for its bright red-orange glow." },
            { term: "Argon", definition: "A noble gas used in light bulbs to prevent the filament from burning." },
            { term: "Krypton", definition: "A noble gas used in lasers and some photographic flashes." },
            { term: "Xenon", definition: "A noble gas used in car headlights and flash lamps." },
            { term: "Radon", definition: "A radioactive noble gas found at the bottom of Group 0." },
            { term: "Intermolecular forces", definition: "Forces between molecules; these increase down Group 0, raising boiling points." }
          ]
        }
      }
    },
    // Topic 7: Rates of reaction and energy changes (Edexcel Spec)
    "7. Rates of reaction and energy changes": {
      subtopics: {
        "Rates of reaction": {
          quiz: [
            // Easy
            { question: "What is the rate of a chemical reaction?", options: ["How fast reactants are converted to products", "The mass of reactants", "The colour change", "The temperature of the reaction"], correct: 0 },
            { question: "Which of these increases the rate of reaction?", options: ["Increasing temperature", "Decreasing temperature", "Removing a catalyst", "Lowering concentration"], correct: 0 },
            { question: "What is a catalyst?", options: ["A substance that speeds up a reaction without being used up", "A reactant", "A product", "A solvent"], correct: 0 },
            { question: "What is the effect of increasing concentration on rate?", options: ["Increases rate", "Decreases rate", "No effect", "Stops the reaction"], correct: 0 },
            { question: "What is the effect of increasing surface area on rate?", options: ["Increases rate", "Decreases rate", "No effect", "Stops the reaction"], correct: 0 },
            // Medium
            { question: "What is the effect of increasing pressure on the rate of a reaction involving gases?", options: ["Increases rate", "Decreases rate", "No effect", "Stops the reaction"], correct: 0 },
            { question: "What is the collision theory?", options: ["Particles must collide with enough energy to react", "Particles must be the same size", "Particles must be cold", "Particles must be dissolved"], correct: 0 },
            { question: "What is activation energy?", options: ["The minimum energy needed for a reaction to occur", "The energy released in a reaction", "The energy of the products", "The energy of the reactants"], correct: 0 },
            { question: "How does a catalyst affect activation energy?", options: ["Lowers it", "Raises it", "No effect", "Removes it"], correct: 0 },
            { question: "What is the effect of temperature on the frequency of collisions?", options: ["Increases frequency", "Decreases frequency", "No effect", "Stops collisions"], correct: 0 },
            // Hard
            { question: "Why does increasing temperature increase the rate of reaction?", options: ["Particles move faster and collide more often with more energy", "Particles get bigger", "Particles dissolve", "Particles change colour"], correct: 0 },
            { question: "What is the formula for rate of reaction?", options: ["Rate = change in amount / time", "Rate = time / change in amount", "Rate = mass x time", "Rate = volume x time"], correct: 0 },
            { question: "What is meant by a 'successful collision'?", options: ["A collision with enough energy to react", "Any collision", "A collision with low energy", "A collision with a catalyst"], correct: 0 },
            { question: "What is the effect of a powdered solid reactant compared to a lump?", options: ["Powder reacts faster due to greater surface area", "Lump reacts faster", "No difference", "Powder reacts slower"], correct: 0 },
            { question: "What is the effect of removing a catalyst from a reaction?", options: ["Decreases rate", "Increases rate", "No effect", "Stops the reaction"], correct: 0 }
          ],
          terms: [
            { term: "Rate of reaction", definition: "The speed at which reactants are converted into products." },
            { term: "Collision theory", definition: "A theory that states particles must collide with enough energy and correct orientation to react." },
            { term: "Activation energy", definition: "The minimum energy required for a reaction to occur." },
            { term: "Catalyst", definition: "A substance that increases the rate of a reaction without being used up." },
            { term: "Concentration", definition: "The amount of solute in a given volume; higher concentration increases rate." },
            { term: "Surface area", definition: "The total area of the surface of a solid; increasing it increases rate." },
            { term: "Pressure", definition: "Increasing pressure increases the rate of reactions involving gases." },
            { term: "Temperature", definition: "Increasing temperature increases the rate of reaction by increasing particle energy and collision frequency." },
            { term: "Successful collision", definition: "A collision between particles with enough energy to react." },
            { term: "Frequency of collisions", definition: "How often particles collide; higher frequency increases rate." },
            { term: "Powdered reactant", definition: "A solid reactant in powder form reacts faster than a lump due to greater surface area." },
            { term: "Rate formula", definition: "Rate = change in amount of reactant or product / time taken." }
          ]
        },
        "Energy changes in reactions": {
          quiz: [
            // Easy
            { question: "What is an exothermic reaction?", options: ["A reaction that releases energy to the surroundings", "A reaction that absorbs energy", "A reaction that produces a gas", "A reaction that forms a precipitate"], correct: 0 },
            { question: "What is an endothermic reaction?", options: ["A reaction that absorbs energy from the surroundings", "A reaction that releases energy", "A reaction that produces a gas", "A reaction that forms a precipitate"], correct: 0 },
            { question: "What happens to the temperature of the surroundings in an exothermic reaction?", options: ["It increases", "It decreases", "It stays the same", "It fluctuates"], correct: 0 },
            { question: "What happens to the temperature of the surroundings in an endothermic reaction?", options: ["It decreases", "It increases", "It stays the same", "It fluctuates"], correct: 0 },
            { question: "Which of these is an example of an exothermic reaction?", options: ["Combustion", "Photosynthesis", "Thermal decomposition", "Electrolysis"], correct: 0 },
            // Medium
            { question: "Which of these is an example of an endothermic reaction?", options: ["Thermal decomposition", "Combustion", "Neutralisation", "Respiration"], correct: 0 },
            { question: "What is the energy profile diagram for an exothermic reaction?", options: ["Products have less energy than reactants", "Products have more energy than reactants", "Products and reactants have the same energy", "Energy stays constant"], correct: 0 },
            { question: "What is the energy profile diagram for an endothermic reaction?", options: ["Products have more energy than reactants", "Products have less energy than reactants", "Products and reactants have the same energy", "Energy stays constant"], correct: 0 },
            { question: "What is activation energy?", options: ["The minimum energy needed for a reaction to occur", "The energy released in a reaction", "The energy of the products", "The energy of the reactants"], correct: 0 },
            { question: "What is the effect of a catalyst on activation energy?", options: ["Lowers it", "Raises it", "No effect", "Removes it"], correct: 0 },
            // Hard
            { question: "What is the sign of the enthalpy change (ΔH) for an exothermic reaction?", options: ["Negative", "Positive", "Zero", "It varies"], correct: 0 },
            { question: "What is the sign of the enthalpy change (ΔH) for an endothermic reaction?", options: ["Positive", "Negative", "Zero", "It varies"], correct: 0 },
            { question: "What is meant by bond energy?", options: ["The energy required to break one mole of a bond in a molecule", "The energy released when a bond forms", "The energy of the products", "The energy of the reactants"], correct: 0 },
            { question: "How is the overall energy change in a reaction calculated using bond energies?", options: ["Energy to break bonds - energy released making bonds", "Energy released making bonds - energy to break bonds", "Energy of products - energy of reactants", "Energy of reactants - energy of products"], correct: 0 },
            { question: "What is a typical use of an endothermic reaction?", options: ["Instant cold packs", "Hand warmers", "Combustion", "Respiration"], correct: 0 }
          ],
          terms: [
            { term: "Exothermic reaction", definition: "A reaction that releases energy to the surroundings, usually as heat." },
            { term: "Endothermic reaction", definition: "A reaction that absorbs energy from the surroundings." },
            { term: "Energy profile diagram", definition: "A graph showing the energy changes during a chemical reaction." },
            { term: "Activation energy", definition: "The minimum energy required for a reaction to occur." },
            { term: "Enthalpy change (ΔH)", definition: "The overall energy change in a reaction; negative for exothermic, positive for endothermic." },
            { term: "Bond energy", definition: "The energy required to break one mole of a specific bond in a molecule." },
            { term: "Catalyst", definition: "A substance that lowers the activation energy and increases the rate of a reaction without being used up." },
            { term: "Combustion", definition: "A chemical reaction in which a substance reacts with oxygen, releasing energy (exothermic)." },
            { term: "Thermal decomposition", definition: "A reaction in which a compound is broken down by heat (endothermic)." },
            { term: "Neutralisation", definition: "A reaction between an acid and a base, usually exothermic." },
            { term: "Instant cold pack", definition: "A product that uses an endothermic reaction to absorb heat and provide cooling." },
            { term: "Hand warmer", definition: "A product that uses an exothermic reaction to release heat and provide warmth." }
          ]
        }
      }
    },
    // Topic 8: Fuels and Earth science (Edexcel Spec)
    "8. Fuels and Earth science": {
      subtopics: {
        "Fuels": {
          quiz: [
            // Easy
            { question: "What is a fuel?", options: ["A substance that releases energy when burned", "A substance that absorbs energy", "A type of rock", "A type of metal"], correct: 0 },
            { question: "What is crude oil?", options: ["A mixture of hydrocarbons", "A pure substance", "A metal ore", "A type of coal"], correct: 0 },
            { question: "What is the main component of natural gas?", options: ["Methane", "Ethane", "Propane", "Butane"], correct: 0 },
            { question: "What is the process used to separate crude oil into fractions?", options: ["Fractional distillation", "Filtration", "Crystallisation", "Electrolysis"], correct: 0 },
            { question: "What is a hydrocarbon?", options: ["A compound made of hydrogen and carbon only", "A compound made of hydrogen, carbon, and oxygen", "A compound made of carbon and oxygen only", "A compound made of hydrogen and oxygen only"], correct: 0 },
            // Medium
            { question: "What is the general formula for alkanes?", options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n+1"], correct: 0 },
            { question: "What is produced when a hydrocarbon burns completely in oxygen?", options: ["Carbon dioxide and water", "Carbon monoxide and water", "Hydrogen and carbon", "Methane and ethane"], correct: 0 },
            { question: "What is incomplete combustion?", options: ["Burning with insufficient oxygen, producing carbon monoxide or soot", "Burning with excess oxygen", "Burning with no oxygen", "Burning with only hydrogen"], correct: 0 },
            { question: "What is the main use of petrol?", options: ["Fuel for cars", "Fuel for planes", "Fuel for ships", "Fuel for trains"], correct: 0 },
            { question: "What is the environmental problem caused by burning fossil fuels?", options: ["Air pollution and greenhouse gases", "Water pollution", "Soil erosion", "Noise pollution"], correct: 0 },
            // Hard
            { question: "What is the main pollutant produced by incomplete combustion of hydrocarbons?", options: ["Carbon monoxide", "Carbon dioxide", "Sulfur dioxide", "Nitrogen oxides"], correct: 0 },
            { question: "What is the test for carbon dioxide?", options: ["Turns limewater milky", "Glowing splint relights", "Lit splint gives a squeaky pop", "Turns blue litmus red"], correct: 0 },
            { question: "What is a fraction in fractional distillation?", options: ["A group of hydrocarbons with similar boiling points", "A pure element", "A type of metal", "A type of rock"], correct: 0 },
            { question: "What is the trend in boiling point of fractions as you go up the fractionating column?", options: ["Decreases", "Increases", "Stays the same", "Varies randomly"], correct: 0 },
            { question: "What is the main use of diesel oil?", options: ["Fuel for lorries and some cars", "Fuel for planes", "Fuel for ships", "Fuel for cooking"], correct: 0 }
          ],
          terms: [
            { term: "Fuel", definition: "A substance that releases energy when burned, usually by reacting with oxygen." },
            { term: "Crude oil", definition: "A mixture of hydrocarbons found underground, used as a source of fuels and chemicals." },
            { term: "Hydrocarbon", definition: "A compound made up of only hydrogen and carbon atoms." },
            { term: "Fractional distillation", definition: "A process used to separate a mixture (such as crude oil) into fractions with similar boiling points." },
            { term: "Fraction", definition: "A group of hydrocarbons with similar boiling points collected during fractional distillation." },
            { term: "Alkane", definition: "A saturated hydrocarbon with the general formula CnH2n+2." },
            { term: "Complete combustion", definition: "Burning a fuel in excess oxygen to produce carbon dioxide and water." },
            { term: "Incomplete combustion", definition: "Burning a fuel with insufficient oxygen, producing carbon monoxide and/or soot." },
            { term: "Carbon monoxide (CO)", definition: "A poisonous, colourless, odourless gas produced by incomplete combustion of hydrocarbons." },
            { term: "Greenhouse gas", definition: "A gas that traps heat in the atmosphere, such as carbon dioxide, methane, and water vapour." },
            { term: "Air pollution", definition: "The presence of harmful substances in the air, often caused by burning fossil fuels." },
            { term: "Limewater test", definition: "A test for carbon dioxide; limewater turns milky/cloudy in its presence." },
            { term: "Petrol", definition: "A fraction from crude oil used as fuel in cars." },
            { term: "Diesel oil", definition: "A fraction from crude oil used as fuel in lorries and some cars." }
          ]
        },
        "Earth and atmospheric science": {
          quiz: [
            // Easy
            { question: "What was the early atmosphere of the Earth mainly composed of?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"], correct: 0 },
            { question: "What gas do plants produce during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"], correct: 0 },
            { question: "What is the main gas in the Earth's atmosphere today?", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"], correct: 0 },
            { question: "What is the greenhouse effect?", options: ["Warming of the Earth due to gases trapping heat", "Cooling of the Earth by gases", "Formation of clouds", "Production of oxygen by plants"], correct: 0 },
            { question: "Which gas is a greenhouse gas?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"], correct: 0 },
            // Medium
            { question: "What is the main cause of the increase in atmospheric carbon dioxide?", options: ["Burning fossil fuels", "Photosynthesis", "Volcanic eruptions", "Respiration"], correct: 0 },
            { question: "What is the effect of increased greenhouse gases in the atmosphere?", options: ["Global warming", "Acid rain", "Ozone depletion", "Increased oxygen"], correct: 0 },
            { question: "What is acid rain mainly caused by?", options: ["Sulfur dioxide and nitrogen oxides", "Carbon dioxide", "Oxygen", "Methane"], correct: 0 },
            { question: "What is the main source of sulfur dioxide in the atmosphere?", options: ["Burning fossil fuels", "Photosynthesis", "Respiration", "Volcanic eruptions"], correct: 0 },
            { question: "What is the main effect of acid rain?", options: ["Damage to buildings, plants, and aquatic life", "Global warming", "Ozone depletion", "Increased oxygen"], correct: 0 },
            // Hard
            { question: "How did oxygen levels in the atmosphere increase over time?", options: ["Photosynthesis by plants and algae", "Respiration by animals", "Volcanic eruptions", "Burning fossil fuels"], correct: 0 },
            { question: "What is the approximate percentage of oxygen in the Earth's atmosphere today?", options: ["21%", "78%", "0.04%", "1%"], correct: 0 },
            { question: "What is the approximate percentage of carbon dioxide in the Earth's atmosphere today?", options: ["0.04%", "21%", "78%", "1%"], correct: 0 },
            { question: "What is the main cause of the decrease in atmospheric carbon dioxide over geological time?", options: ["Formation of sedimentary rocks and photosynthesis", "Respiration", "Volcanic eruptions", "Ozone formation"], correct: 0 },
            { question: "What is the main effect of deforestation on the atmosphere?", options: ["Increases carbon dioxide levels", "Increases oxygen levels", "Decreases methane levels", "Decreases nitrogen levels"], correct: 0 }
          ],
          terms: [
            { term: "Early atmosphere", definition: "The Earth's early atmosphere was mainly carbon dioxide with little or no oxygen." },
            { term: "Photosynthesis", definition: "The process by which plants and algae produce oxygen and remove carbon dioxide from the atmosphere." },
            { term: "Nitrogen", definition: "The most abundant gas in the Earth's atmosphere today (about 78%)." },
            { term: "Oxygen", definition: "A gas produced by plants during photosynthesis; makes up about 21% of the atmosphere today." },
            { term: "Carbon dioxide", definition: "A greenhouse gas present in small amounts in the atmosphere; levels have decreased over time due to photosynthesis and rock formation." },
            { term: "Greenhouse effect", definition: "The warming of the Earth due to greenhouse gases trapping heat in the atmosphere." },
            { term: "Greenhouse gas", definition: "A gas that traps heat in the atmosphere, such as carbon dioxide, methane, and water vapour." },
            { term: "Global warming", definition: "The increase in Earth's average surface temperature due to rising levels of greenhouse gases." },
            { term: "Acid rain", definition: "Rain that is more acidic than normal due to dissolved sulfur dioxide and nitrogen oxides." },
            { term: "Sulfur dioxide (SO2)", definition: "A gas produced by burning fossil fuels; causes acid rain." },
            { term: "Nitrogen oxides (NOx)", definition: "Gases produced by burning fuels in air; contribute to acid rain and air pollution." },
            { term: "Deforestation", definition: "The removal of large areas of forest, increasing atmospheric carbon dioxide." },
            { term: "Sedimentary rock formation", definition: "A process that removes carbon dioxide from the atmosphere as carbon becomes locked in rocks." }
          ]
        }
      }
    }
  },
  physics: {
    "1. Key concepts in physics": {
      subtopics: {
        "SI units": {
          quiz: [
            { question: "What is the SI unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], correct: 0 },
            { question: "What is the SI unit of energy?", options: ["Joule", "Newton", "Watt", "Volt"], correct: 0 },
            { question: "What is the SI unit of power?", options: ["Watt", "Joule", "Newton", "Ampere"], correct: 0 },
            { question: "What is the SI unit of mass?", options: ["Kilogram (kg)", "Gram (g)", "Newton (N)", "Joule (J)"], correct: 0 },
            { question: "What is the SI unit of time?", options: ["Second (s)", "Minute (min)", "Hour (h)", "Day (d)"], correct: 0 },
            // Medium
            { question: "What is the SI unit of temperature?", options: ["Kelvin (K)", "Celsius (°C)", "Fahrenheit (°F)", "Joule (J)"], correct: 0 },
            { question: "What is the SI unit of electric current?", options: ["Ampere (A)", "Volt (V)", "Coulomb (C)", "Ohm (Ω)"], correct: 0 },
            { question: "What is the SI unit of charge?", options: ["Coulomb (C)", "Ampere (A)", "Volt (V)", "Ohm (Ω)"], correct: 0 },
            { question: "What is the SI unit of potential difference?", options: ["Volt (V)", "Ampere (A)", "Coulomb (C)", "Ohm (Ω)"], correct: 0 },
            { question: "What is the SI unit of resistance?", options: ["Ohm (Ω)", "Volt (V)", "Ampere (A)", "Coulomb (C)"], correct: 0 },
            // Hard
            { question: "What is the SI unit of frequency?", options: ["Hertz (Hz)", "Joule (J)", "Watt (W)", "Newton (N)"], correct: 0 },
            { question: "What is the SI unit of pressure?", options: ["Pascal (Pa)", "Newton (N)", "Joule (J)", "Watt (W)"], correct: 0 },
            { question: "What is the SI unit of area?", options: ["Square metre (m²)", "Metre (m)", "Cubic metre (m³)", "Centimetre (cm)"], correct: 0 },
            { question: "What is the SI unit of volume?", options: ["Cubic metre (m³)", "Litre (L)", "Millilitre (mL)", "Square metre (m²)"], correct: 0 },
            { question: "What is the SI unit of acceleration?", options: ["Metres per second squared (m/s²)", "Metres per second (m/s)", "Metre (m)", "Second (s)"], correct: 0 }
          ],
          terms: [
            { term: "SI unit", definition: "International System of Units, standard units for measurement in science." },
            { term: "Force (N)", definition: "Measured in newtons (N)." },
            { term: "Energy (J)", definition: "Measured in joules (J)." },
            { term: "Power (W)", definition: "Measured in watts (W)." },
            { term: "Mass (kg)", definition: "Measured in kilograms (kg)." },
            { term: "Time (s)", definition: "Measured in seconds (s)." },
            { term: "Temperature (K)", definition: "Measured in kelvin (K)." },
            { term: "Electric current (A)", definition: "Measured in amperes (A)." },
            { term: "Charge (C)", definition: "Measured in coulombs (C)." },
            { term: "Potential difference (V)", definition: "Measured in volts (V)." },
            { term: "Resistance (Ω)", definition: "Measured in ohms (Ω)." },
            { term: "Frequency (Hz)", definition: "Measured in hertz (Hz)." },
            { term: "Pressure (Pa)", definition: "Measured in pascals (Pa)." },
            { term: "Area (m²)", definition: "Measured in square metres (m²)." },
            { term: "Volume (m³)", definition: "Measured in cubic metres (m³)." },
            { term: "Acceleration (m/s²)", definition: "Measured in metres per second squared (m/s²)." }
          ]
        },
        "Scalar and vector quantities": {
          quiz: [
            // Easy
            { question: "What is a scalar quantity?", options: ["A quantity with only magnitude", "A quantity with magnitude and direction", "A force", "A vector"], correct: 0 },
            { question: "What is a vector quantity?", options: ["A quantity with magnitude and direction", "A quantity with only magnitude", "A scalar", "A mass"], correct: 0 },
            { question: "Which of these is a scalar quantity?", options: ["Speed", "Velocity", "Displacement", "Force"], correct: 0 },
            { question: "Which of these is a vector quantity?", options: ["Velocity", "Speed", "Distance", "Energy"], correct: 0 },
            { question: "What is the SI unit of displacement?", options: ["Metre (m)", "Second (s)", "Kilogram (kg)", "Newton (N)"], correct: 0 },
            // Medium
            { question: "Which of these is a scalar: mass, force, acceleration, weight?", options: ["Mass", "Force", "Acceleration", "Weight"], correct: 0 },
            { question: "Which of these is a vector: distance, speed, velocity, energy?", options: ["Velocity", "Distance", "Speed", "Energy"], correct: 0 },
            { question: "What is the difference between distance and displacement?", options: ["Distance is scalar, displacement is vector", "Both are scalars", "Both are vectors", "Distance is vector, displacement is scalar"], correct: 0 },
            { question: "What is the difference between speed and velocity?", options: ["Speed is scalar, velocity is vector", "Both are vectors", "Both are scalars", "Speed is vector, velocity is scalar"], correct: 0 },
            { question: "Which of these is NOT a vector: force, acceleration, mass, velocity?", options: ["Mass", "Force", "Acceleration", "Velocity"], correct: 0 },
            // Hard
            { question: "If a car travels 100 m east then 100 m west, what is its displacement?", options: ["0 m", "200 m", "100 m", "50 m"], correct: 0 },
            { question: "If a car travels 100 m east then 100 m west, what is the distance travelled?", options: ["200 m", "0 m", "100 m", "50 m"], correct: 0 },
            { question: "Which of these is a vector: momentum, energy, time, temperature?", options: ["Momentum", "Energy", "Time", "Temperature"], correct: 0 },
            { question: "Which of these is a scalar: work, force, acceleration, displacement?", options: ["Work", "Force", "Acceleration", "Displacement"], correct: 0 },
            { question: "What is the SI unit of velocity?", options: ["Metres per second (m/s)", "Metre (m)", "Second (s)", "Newton (N)"], correct: 0 }
          ],
          terms: [
            { term: "Scalar quantity", definition: "A quantity that has only magnitude (size), not direction." },
            { term: "Vector quantity", definition: "A quantity that has both magnitude and direction." },
            { term: "Magnitude", definition: "The size or amount of a quantity." },
            { term: "Direction", definition: "The line or course along which something moves." },
            { term: "Distance", definition: "A scalar quantity describing how much ground an object has covered." },
            { term: "Displacement", definition: "A vector quantity describing the straight-line distance from start to finish, with direction." },
            { term: "Speed", definition: "A scalar quantity describing how fast something is moving." },
            { term: "Velocity", definition: "A vector quantity describing the speed of something in a given direction." },
            { term: "Force", definition: "A vector quantity that can cause an object to accelerate." },
            { term: "Work", definition: "A scalar quantity; the energy transferred when a force moves an object." },
            { term: "Momentum", definition: "A vector quantity; the product of mass and velocity." }
          ]
        },
        // ... (continue for all required subtopics)
      }
    },
    // ... (continue for all required topics and subtopics for Physics)
  },
  biology: {
    "1. Cell biology": {
      subtopics: {
        "Cell structure": {
          quiz: [
            { question: "What is the function of the mitochondria?", options: ["Energy release", "Protein synthesis", "Genetic control", "Cell division"], correct: 0 },
            { question: "Which structure controls the activities of the cell?", options: ["Nucleus", "Cytoplasm", "Cell wall", "Ribosome"], correct: 0 },
            { question: "What is found in plant cells but not animal cells?", options: ["Cell wall", "Nucleus", "Mitochondria", "Ribosome"], correct: 0 }
          ],
          terms: [
            { term: "Mitochondria", definition: "The site of aerobic respiration and energy release." },
            { term: "Nucleus", definition: "Contains genetic material and controls cell activities." },
            { term: "Cell wall", definition: "A rigid layer in plant cells for support." }
          ],
          exam: [
            { question: "Describe the structure and function of animal and plant cells, including organelles.", marks: 6 }
          ]
        },
        // ... (continue for all required subtopics)
      }
    },
    // ... (continue for all required topics and subtopics for Biology)
  }
};

