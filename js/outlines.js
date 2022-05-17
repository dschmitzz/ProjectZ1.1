// function here to write the outline based on an array

var topic;

areas = 'formsci~ Areas of Study|areas.html~ .Mathematics~ Arithmetic|arithmetic.html~ Algebra~ Geometry|geometry.html~ Discrete Mathematics|discrete-math.html~ Precalculus|precalc.html~ Differential Calculus|calc-diff.html~ Integral Calculus|calc-int.html~ Multivariable Calculus|calc-multi.html~ Differential Equations|diffeq.html~ Linear Algebra|linear-algebra.html~ '
    + 'Combinatorics|combinatorics.html~ Probability & Statistics|probstats.html~ '
    + '.Computer Science~ Computer Architecture|compArch.html~ Data Structures & Algorithms|data-structures-algorithms.html~ '
    + 'C|C.html~ '//C++|c++.html~ C#|c#.html~ Java|java.html~ Python|python.html~ 
    + 'Web Development|webdev.html~ '
    + '.Natural Science~ '//Classical Mechanics|class-mech.html~ 
    + 'Classical Physics|physClassical.html~ Electricity & Magnetism|emag.html~ Modern Physics|physModern.html~ '//Quantum Mechanics|quantum-mech.html~ Cosmology|cosmology.html~ 
    + 'General Chemistry|chemistry.html~ '//Organic Chemistry|org-chem.html~ Biology|biology.html~ Earth Science|earth-sci.html~ '
    //+ '.Social Science~ '
    + 'Biology|biology.html~ '
    + '.Humanities~ Music Theory|music-theory.html~ '
    + '.Standardized Tests~ ACE Personal Trainer|acept.html~ '
    ;
algebra = 'formsci~ Algebra~ .Expressions & Equations~ '
arithmetic = 'formsci~ Arithmetic~ .Counting & Place Value~ '
    + '.Basic Operations~ Addition~ Subtraction~ Multiplication~ Division~ ' 
    + '.Decimals, Fractions, Percents~ '
    + '.Ratios & Proportions~ '
    + '.Exponents & Radicals~ Exponents~ Roots~ Logs~ '
biology = 'natsci~ Biology|biology.html~ .Fundamentals~ SI Units|si-units.html~ Significant Figures|sig-figs.html~ Scientific Method|scientific-method.html~ '
    + '.Chemistry of Life~ Elements of Life|elements-of-life.html~ Chemical Reactions~ Acids & Bases~ Carbon Compounds~ Carbohydrates~ Lipids~ Proteins~ Nucleic Acids~ '
    + '.Cells~ Prokaryotic Cells~ Eukaryotic Cells~ Animal Cells~ Plant Cells~ Nucleus~ Endomembrane System~ Mitochondria & Chloroplasts~ Cytoskeleton~ Cell Cycle~ '
    + '.Energy Transfer~ Cell Membrane~ Passive Transport~ Active Transport~ Exocytosis & Endocytosis~ Cell Signaling~ Metabolism & ATP~ Cellular Respiration~ Fermentation~ Photosynthesis~ '
    + '.Genetics~ Mitosis~ Meiosis~ Mendelian Inheritance~ Post-Mendelian Inheritance~ Chromosomes~ DNA Synthesis~ Gene Expression~ Regulating Gene Expression~ Life Development~ Viruses~ Genomes~ '
    + '.Evolution~ Origin of Life~ Evolution of Prokaryotes~ Evolution of Eukaryotes~ Evolution of Plants & Fungi~ Evolution of Animals~ Diversification of Species~ Darwinian Evolution~ Phylogeny~ Evolution of Populations~ '
    + '.Plants~ Plant Structure~ Plant Growth~ Plant Nutrition~ Transpiration~ Flowers & Reproduction~ Plant Hormones~ Plant Stimuli~ '
    + '.Animals~ Organ Systems~ Skeletal System~ Muscular System~ Circulatory System~ Respiratory System~ Endocrine System~ Immune System~ Animal Reproduction~ Animal Nutrition~ Animal Development~ Neural Signaling~ Nervous System~ Sensory Receptors~ Motor Functions~ '
    + '.Ecology~ Organismal Ecology~ Populations~ Communities~ Ecosystems~ Landscapes~ Global Ecology~ '
c = 'formsci~ C|C.html~ .Fundamentals~ Hello World|c-hello-world.html~ '
    //+ '.Operators &amp; Expressions'
        // maybe condense these types into one page or at least group a few similar ones together
    + '.Types, Memory &amp; Storage~ Data Types|c-datatypes.html~ Scope|c-scope.html~ Memory Regions|c-memory-regions.html~ '// const|c-const.html~ extern|c-extern.html~ Strings in Memory|c-strings.html~ '
    //+ '.Functions~ '
    + '.Pointers &amp; Arrays~ Pointers &amp; Addresses|c-pointers-addresses.html~ 1D Arrays|c-1d-arrays.html~ Strings|c-strings.html~ '
    + '.Structures~ typedef|c-typedef.html~ '
    //+ '.Input &amp; Output~ '
    ;
calcDiff = 'formsci~ Differential Calculus~ .Limits & Continuity~ Limits~ Evaluating Limits~ Continuity~ Infinite Limits~ '
    + '.Differentiation~ Limit Definition~ Constant &amp; Power Rules|constant-power-rule.html~ Sum &amp; Difference Rules|sum-diff-rule.html~ Trig Derivatives~ Chain Rule|chain-rule.html~ Product Rule|product-rule.html~ Quotient Rule~ '
    + '.Techniques of Differentiation~ Implicit Differentiation~ Inverse Functions~ Exponential & Logarithmic Derivatives~ Inverse Trig Derivatives~ '
    + '.Applications of Differentiation~ Related Rates~ Extrema & Concavity~ Mean Value Theorem~ Limits at Infinity~ Curve Sketching~ Optimization~ Newton\'s Method~ Differentials~ '
    + '.Differential Equations~ Slope Fields & Euler\'s Method~ Growth & Decay~ Separation of Variables~ Logistic Equations~ First-Order Linear Differential Equations~ '
;
calcInt = 'formsci~ Integral Calculus~ '
    + '.Integration~ Riemann Sums~ Basic Integration~ Definite Integrals~ Fundamental Theorem of Calculus~ Numerical Integration~ '
    + '.Techniques of Integration~ Exponential & Log Integrals~ Integration by Substitution~ Integration by Parts~ Trig Substitution~ Partial Fractions~ Integration by Tables~ Indeterminate Integrals~ Improper Integrals~ '
    + '.Applications of Integration~ Area Between Curves~ Volume by Disks~ Volume by Shells~ Arc Length~ Surface of Revolution~ Work~ Moment & Center of Mass~ Fluids~ '
    + '.Sequences & Series~ Sequences & Summations~ Series & Convergence~ Geometric Series~ Telescoping Series~ p-Series~ Alternating Series~ Integral Test~ Ratio & Root Tests~ Comparison Tests~ Power Series~ Taylor Series~ '
;
chemistry = 'natsci~ Chemistry~ .Fundamentals~ SI Units|si-units.html~ Significant Figures|sig-figs.html~ Scalars &amp; Vectors|scalars-vectors.html~ Scientific Method|scientific-method.html~ '
+ '.Atoms~ Moles &amp; Molar Mass~ Mass Spectroscopy of Elements~ Periodic Trends~ Pauli Exclusion Principle~ '
+ '.Compounds~ Ionic & Metallic Bonds~ Covalent Bonds~ Lewis Structures~ '
+ '.Intermolecular Forces~ Kinetic Molecular Theory~ Ideal Gases~ Electromagnetic Spectrum~ '
+ '.Chemical Reactions~ '
+ '.Kinetics~ Rate Law|rate-law.html~ '
+ '.Equilibrium~ RICE Tables|rice-tables.html~ '
+ '.Acids &amp; Bases~ '
+ '.Thermodynamics~ Gibb\'s Free Energy~ '
;
combinatorics = 'formsci~ Combinatorics|combinatorics.html~ .Fundamentals~ Sum &amp; Product Rules|sum-product-rules.html~ Permutations|permutations.html~ Combinations|combinations.html~ //Binomial Theorem|binomial-thm.html~ Prime Numbers|prime-numbers.html~ '
    + '.Logic~ Propositions|propositions.html~ Logic Operators|logic-ops.html~ Demorgan\'s Law|demorgan.html~ Logical  Equivalence~ Rules of Inference~ Quantifiers~ '
    // + '.Set Theory~ Sets &amp; Subsets|sets-subsets.html~ Venn Diagrams|venn-diagrams.html~ Axioms of Probability|axioms-of-probability.html~ Conditional Probability|conditional-probability.html~ Independence|independence.html~ '
    + '.Math Induction~ Mathematical Induction|math-induction.html~ Recursion|recursion.html~ Division Algorithm|division-algo.html~ Euclidean Algorithm (gcd)|gcd.html~ Fundamental Theorem of Arithmetic|fta.html~ '
    + '.Relations &amp; Functions~ Cartesian Products &amp; Relations|cartesian-products-relations.html~ Plain &amp; One-to-one Functions|plain-121-functions.html~ Onto Functions|onto-functions.html~ Special Functions|special-functions.html~ Pigeonhole Principle|pigeonhole-principle.html~ '
    + '.Inclusion/Exclusion~ Principle of Inclusion-Exclusion~ Derangements~ '
    + '.Generating Functions~ Partitions of Integers|int-partitions.html~ Exponential Generating Functions|exp-generating-fnc.html~ '
    // + '.Recurrence Relations~ '
    + '.Graphs~ Graph Basics|graph-basics.html~ Subgraphs|subgraphs.html~ Vertex Degree|vertex-degree.html~ Complements &amp; Isomorphism|complements-isomorphism.html~ Planar Graphs|planar-graphs.html~ Hamilton Paths &amp; Cycles|hamilton-paths-cycles.html~ Graph Coloring|graph-coloring.html~ Dijkstra\'s Shortest Path~ '
    + '.Trees~ Tree Basics~ Tree Traversal~ '
    ;
compArch = 'formsci~ Computer Architecture|compArch.html~ .Bit Logic~ Binary|binary.html~ Integer Data Types|int-datatypes.html~ Base Conversions|base-conversions.html~ Bitwise Arithmetic Operators|bitwise-arithmetic-ops.html~ Bitwise Logic Operators|bitwise-logic-ops.html~ Masking &amp; Shifting|masking-shifting.html~ IEEE-754 Floating Point|ieee754.html~ '
    + '.Digital Logic Structures~ MOS Transistors|mos-transistors.html~ Logic Gates|logic-gates.html~ Boolean Functions~ Combinational Logic Circuits|comb-logic-circuits.html~ Latches|latches.html~ Flip-flops|flip-flops.html~ Sequential Logic Circuits|seq-logic-circuits.html~ One-hot FSM|1hot-fsm.html~ Binary Encoding FSM|binary-fsm.html~ '
    + '.Von Neumann &amp; LC-3~ Memory|comp-memory.html~ Von Neumann Model|von-neumann.html~ LC-3 ISA|lc3-isa.html~ Operate Instructions|operate-instructions.html~ Data Movement Instructions|data-mvt-instructions.html~ Control Instructions|control-instructions.html~ LC-3 Datapath|lc3-datapath.html~ '
    + '.LC-3 Assembly~ Instruction Syntax|instruction-syntax.html~ Pseudo-ops|pseudo-ops.html~ Loops &amp; Conditionals|loops-conditionals.html~ Call/Return|call-return.html~ JSR &amp; JSRR|jsr-jsrr.html~ The Stack|the-stack.html~ Recursion|lc3-recursion.html~ '
    + '.I/O~ '
    + '.Game Boy Advance~ Graphics|gba-graphics.html~ V-Blank|gba-vblank.html~ DMA|gba-dma.html~ GBA State Machines|gba-state-machines.html~ '
    + '.x86 Assembly~ '
    ;
dataStrAlg = 'formsci~ Data Structures &amp; Algorithms~ .Fundamentals~ Arrays~ Big-O~ Generics~ Recursion~ '
    + '.Lists~ ArrayList~ Singly Linked List~ Doubly Linked List~ Circularly Linked List~ '
    + '.Stacks, Queues, Deques~ Stacks|stacks.html~ Queues~ Deques~ '
    + '.HashMaps~ External Chaining~ Linear Probing~ Quadratic Probing~ Double Hashing~ '
    + '.Trees &amp; Skiplists~ Binary Search Tree~ Heap (Priority Queue)~ AVL Tree~ 2-4 Tree~ SplayTree~ Skiplist~ '
    + '.Sorting Algorithms~ Bubble Sort~ Cocktail Shaker Sort~ Insertion Sort~ Selection Sort~ Quicksort~ MergeSort~ LSD Radix Sort~ HeapSort~ '
    + '.Pattern-Matching Algorithms~ Brute Force~ Boyer-Moore~ KMP~ Rabin-Karp~ '
    + '.Graph Algorithms~ Breadth-First Search~ Depth-First Search~ Dijkstra\'s Shortest Path~ Prim\'s MST~ Kruskal\'s MST~ '
    + '.Dynamic Programming~ Longest Common Substring~ Floyd Warshall~ ';
discreteMath = 'formsci~ Discrete Mathematics~ .Logic & Proofs~ Propositions|propositions.html~ Logic Operators|logic-ops.html~ De Morgan\'s Laws|demorgan.html~ Logical Equivalence~ Rules of Inference~ Quantifiers~ Proof Basics~ Proof Methods~ '
    + '.Basic Structures~ Sets &amp; Subsets~ Set Operations~ Sequences & Summations~ Matrices~ '
    + '.Probability~ Intro to Probability~ Independence|independence.html~ Bayes\' Theorem|bayes-theorem.html~ Random Variables|randvars.html~ '
    + '.Algorithms~ Binary Search~ Bubble Sort~ Insertion Sort~ Greedy Algorithms~ Big-O~ Complexity of Algorithms~ '
    + '.Number Theory & Cryptography~ Sets of Numbers~ Division Algorithm|division-algo.html~ Modular Arithmetic~ Base Conversions~ Prime Numbers|prime-numbers.html~ Greatest Common Denominator|gcd.html~ Linear Congruences~ Cryptography~ '
    + '.Relations & Functions~ Functions~ Relations~ n-ary Relations~ Representing Relations~ Closures of Relations~ Equivalence Relations~ Partial Orderings~ '
    + '.Boolean Algebra~ Boolean Functions~ Logic Gates|logic-gates.html~ Combinational Logic Circuits|comb-logic-circuits.html~ '
    + '.Induction & Recursion~ Mathematical Induction~ Strong Induction~ Recursion~ Program Correctness~ '
    + '.Counting~ Sum & Product Rule|sum-product-rules.html~ Permutations|permutations.html~ Combinations|combinations.html~ Binomial Theorem|binomial-thm.html~ Pigeonhole Principle|pigeonhole-principle.html~ Linear Recurrence Relations~ Generating Functions~ Principle of Inclusion-Exclusion~ '
    + '.Graphs~ Graph Basics|graph-basics.html~ Subgraphs|subgraphs.html~ Vertex Degree|vertex-degree.html~ Complements &amp; Isomorphism|complements-isomorphism.html~ Planar Graphs|planar-graphs.html~ Hamilton Paths &amp; Cycles|hamilton-paths-cycles.html~ Graph Coloring|graph-coloring.html~ Dijkstra\'s Shortest Path~ '
    + '.Trees~ Tree Basics~ Tree Traversal~ Prim\'s MST~ Kruskal\'s MST~ '
    + '.Modeling Computation~ Languages & Grammars~ Finite-State Machines~ Language Recognition~ Turing Machines~ '
    ;
diffeq = 'formsci~ Differential Equations~ .First Order ODEs~ Slope Fields & Euler\'s Method~ Separable Equations~ Linear Equations~ Applications~ '
    + '.Second Order ODEs~ 2nd Order Euler\'s Method~ Superposition Principle~ Wronskian~ Dinstinct Real Roots~ Distinct Complex-Conjugate Roots~ Repeated Roots~ Inhomogeneous ODEs~ Resonance~ Applications~ Damped Resonance~ '
    + '.Laplace Transform~ Initial Value Problems~ Heaviside Function~ Dirac Delta Function~ Discontinuous Terms~ '
    + '.Series Solutions~ Ordinary Points~ Distinct Real Roots~ Distinct Complex-Conjugate Roots~ Repetaed Roots~ '
    + '.Systems of Equations~ Matrices~ Determinants~ Distinct Real Eigenvalues~ Distinct Complex-Conjugate Eigenvalues~ Repeated Eigenvalues with One Eigenvector~ Normal Modes~ '
    + '.Nonlinear Differential Equations~ 1D Fixed Points & Stability~ 2D Fixed Points & Stability~ Saddle-node Bifurcation~ Transcritical Bifurcation~ Supercritical Pitchfork Bifurcation~ Subcritical Pitchfork Bifurcation~ Supercritical Hopf Bifurcation~ Subcritical Hopf Bifurcation~ '
    + '.Partial Differential Equations~ Diffusion Equation~ Wave Equation~ Fourier Series~ Fourier Sine and Cosine Series~ Solution of the Diffusion~ Pipe with Closed Ends~ '
    ;
emag = 'natsci~ Electricity &amp; Magnetism|emag.html~ .Fundamentals~ SI Units|si-units.html~ Significant Figures|sig-figs.html~ Scalars &amp; Vectors|scalars-vectors.html~ Scientific Method|scientific-method.html~ '
    + '.Electric Field~ Electric Charge &amp; Force|electric-charge-force.html~ '
    + '.Electric Field of Distributed Charges~ Rods|uc-thin-rod.html~ Rings|uc-thin-ring.html~ Disks|uc-disk.html~ Spherical Shell|spherical-shell.html~ Solid Sphere|solid-sphere.html~ '
    + '.AC Circuits~ Power in AC Circuits~ ' 
    + '.Magnetic Force~ Moving Charge|mforce-moving-charge.html~ Current-Carrying Wire|mforce-wire.html~ Electric &amp; Magnetic Forces|electric-magnetic-forces.html~ '
    + '.Flux &amp; Faraday\'s Law~ Curly Electric Fields|curly-efields.html~ Faraday\'s Law|faradays-law.html~ Motional EMF|motional-emf.html~ Maxwell\'s Equations|faraday-maxwells-equations.html~ Superconductors|superconductors.html~ '
    ;
geometry = 'formsci~ Geometry~ .Shapes~ '
    + '.Points, Lines, Angles~ '
    + '.Coordinate Planes~ '
    + '.Perimeter, Area, Volume~ '
    + '.Congruence, Similarity, Transformations~ '
    + '.Right Triangles~ ' // pythagorean thm, trig functions, LoS, LoC
    + '.Circles~ ' // arc length, area of sectors, angles, radii, chords
    + '.Polar Coordinates~ Conic Sections~ Plane Curves~ Parametric Equations~ Polar Graphs~ Polar Area & Arc Length~ Equations of Conics~ Kepler\'s Laws~ '
    ;
linAlg = 'formsci~ Linear Algebra~ .Fundamentals~ Vectors|scalars-vectors.html~ Matrices|matrices.html~ '
    + '.Linear Equations~ '
    + '.Vector Spaces & Subspaces~ '
    + '.Orthogonality~ '
    + '.Determinants~ '
    + '.Eigenvalues & Eigenvectors~ '
    + '.Singular Value Decomposition~ '
    + '.Linear Transformations~ '
    + '.Complex Vectors & Matrices~ '
    + '.Numerical Linear Algebra~ '
    ;
multi = 'formsci~ Multivariable Calculus~ .Vectors in Space~ Scalars & Vectors|scalars-vectors.html~ Lines & Planes~ Surfaces~ Polar Coordinates~ '
    + '.Vector Functions~ Vector-Valued Functions~ Differentiation & Integration~ Velocity & Acceleration~ Arc Length & Curvature~ Multivariable Functions~ Limits & Continuity~ '
    + '.Partial Derivatives~ Partial Derivatives~ Differentials~ Partial Chain Rule~ Directional Derivatives & Gradients~ Tangent Planes & Normal Lines~ Extrema~ Lagrange Multipliers~ '
    + '.Multiple Integrals~ Iterated Integrals~ Double Integrals~ Triple Integrals~ Center of Mass & Moment of Inertia~ Polar Triple Integrals~ Jacobians~ '
    + '.Vector Analysis~ Vector Fields~ Line Integrals~ Path Independence~ Green\'s Theorem~ Parametric Surfaces~ Surface Integrals~ Divergence Theorem~ Stokes\' Theorem~ '
    ; 
musicTheory = 'humanities~ Music Theory~ .Fundamentals~ Pitch & Intervals~ Clefs~ Circle of Fifths~ Rhythm~ '
    + '.Large Forms~ Ternary Form~ Rondo Form~ Sonata Form~ '
physClassical = 'natsci~ Classical Mechanics~ .Fundamentals~ SI Units|si-units.html~ Significant Figures|sig-figs.html~ Scalars &amp; Vectors|scalars-vectors.html~ Scientific Method|scientific-method.html~ '
    + '.Wave Optics~ Interference of Light~ Diffraction Grating~ Single-Slit Diffraction~ Circular-Aperture Diffraction~ Wave Model of Light~ Interferometers~ '
    + '.Ray Optics~ Ray Model of Light~ Reflection~ Refraction~ Image Formation~ Ray Tracing~ Refraction Theory~ Spherical Mirrors~ '
    + '.Optical Instruments~ Lenses~ Cameras~ Vision~ Magnifiers~ Color & Dispersion~ Resolution~ '
physModern = 'natsci~ Modern Physics~ .Fundamentals~ SI Units|si-units.html~ Significant Figures|sig-figs.html~ Scalars &amp; Vectors|scalars-vectors.html~ Scientific Method|scientific-method.html~ Standard Model|standard-model.html~ '
    + '.Relativity~ Galilean Relativity~ Einsteinian Relativity~ Events & Measurements~ Relativity of Simultaneity~ Time Dilation~ Length Contraction~ Lorentz Transformation~ Relativistic Momentum~ Relativistic Energy~ '
    + '.Quantization~ Photoelectric Effect~ Photons~ Matter Waves & Energy Quantization~ Bohr Atom~ Bohr Hydrogen Atom~ Hydrogen Spectrum~ '
    + '.Wave Functions~ Waves & Particles~ Wave Function~ Normalization~ Wave Packets~ Heisenberg Uncertainty Principle~ '
    + '.Quantum Mechanics~ Shr&ouml;dinger Equation~ Particle in a Rigid Box~ Correspondence Principle~ Finite Potential Wells~ Quantum Harmonic Oscillator~ Quantum Tunneling~ '
    + '.Atomic Physics~ Periodic Table~ Quantum Numbers~ Spin~ Pauli Exclusion Principle~ Excited States~ Lasers~ '
    + '.Nuclear Physics~ Nuclear Structure~ Nuclear Stability~ Strong Force~ Shell Model~ Radiation & Radioactivity~ Nuclear Decay~ Biological Applications~ '
    ;
probstats = 'formsci~ Probability &amp; Statistics|probstats.html~ '
    + '.Probability~ Intro to Probability~ Independence|independence.html~ Bayes\' Theorem|bayes-theorem.html~ Random Variables|randvars.html~ '
    + '.Discrete Distributions~ Discrete Probability Distributions|disc-probdists.html~ Discrete Cumulative Distribution Functions|disc-cdfs.html~ Discrete Mean &amp; Variance|disc-mean-variance.html~ Discrete Uniform Distribution|discrete-uniform-dist.html~ Binomial Distribution|binomial-dist.html~ Geometric &amp; Negative Binomial Distributions|geometric-negbin-dist.html~ Hypergeometric Distribution|hypergeometric-dist.html~ Poisson Distribution|poisson-dist.html~ '
    + '.Continuous Distributions~ Continuous Probability Distributions|cont-probdists.html~ Continuous Cumulative Distribution Functions|cont-cdfs.html~ Continuous Mean &amp; Variance|cont-mean-variance.html~ Exponential Distribution|exp-dist.html~ '
    + '.Joint Distributions~ '//Joint Probability Distributions|joint-prob-dists.html~ '
    + 'Conditional Distributions|conditional-dists.html~ '
    + '.Descriptive Statistics~ Numerical Summaries of Data|num-sums-data.html~ Stem-and-Leaf Diagrams|stem-leaf-diagrams.html~ Frequency Distributions &amp; Histograms|histograms.html~ Box Plots|box-plots.html~ '
    + '.Point Estimation~ '
    ;
python = 'formsci~ Python~ '
    + '.Fundamentals~ '
    + '.Flow Control~ '
    + '.Datatypes~ '
    + '.Functions~ '
    + '.File I/O~ '
    + '.Object-Oriented Programming~ '
webdev = 'formsci~ Web Development|webdev.html~ '
    + '.HTML~ Document Structure~ Basic Tags~ List & Tables~ Links & Images~ Forms~ Audio & Video~ '
    + '.CSS~ Selectors~ Basic Properties~ Formatting Font & Text~ Box Model~ Flex Model~ Grid Model~ Animation~ '
    + '.Javascript~ Syntax~ Arithmetic~ Conditionals~ Loops~ Functions~ Scope~ Arrays~ Objects~ Maps~ String, Date, Math~ Regular Expressions~ Classes~ Canvas Drawing~ Asynchronous JS~ Fetch API~ '
    + '.JavaScript in the Browser~ Ajax|ajax.html~ 3rd Party Web APIs|js-web-apis.html~ '
    + '.jQuery~ '
    + '.Node.js~ '
    + '.PHP~ '
    + '.SQL~ '
    ;
testACEpt = 'test~ ACE Personal Trainer|acept.html~ '
    + '.Client Interviews & Assessments~ '
    + '.Program Design & Implementation~ Cardiorespiratory Training~ '
    + '.Progression & Modifications~ Modifications for Obesity~ Modifications for Chronic Disease~ Modifications across Lifespan~ Modifications for Musculoskeletal Issues~ '
    + '.Professional Conduct, Safety, Risk Management~ '

function checkTopic() {
    alert(topic);
}

function setTopic(current) {
    sessionStorage.setItem('topic', current);
    topic = current;
}

function topicSelector() {
    switch (topic) {
        case 'algebra': topic = algebra; break;
        case 'areas': topic = areas; break;
        case 'arithmetic': topic = arithmetic; break;
        case 'biology': topic = biology; break;
        case 'C': topic = c; break;
        case 'calc-diff': topic = calcDiff; break;
        case 'calc-int': topic = calcInt; break;
        case 'calc-multi': topic = multi; break;
        case 'chemistry': topic = chemistry; break;
        case 'combinatorics': topic = combinatorics; break;
        case 'compArch': topic = compArch; break;
        case 'geometry': topic = geometry; break;
        case 'dataStrAlg': topic = dataStrAlg; break;
        case 'diffeq': topic = diffeq; break;
        case 'discrete-math': topic = discreteMath; break;
        case 'emag': topic = emag; break;
        case 'linalg': topic = linAlg; break;
        case 'multi': topic = multi; break;
        case 'music-theory': topic = musicTheory; break;
        case 'physClassical': topic = physClassical; break;
        case 'physModern': topic = physModern; break;
        case 'precalc': topic = precalc; break;
        case 'probstats': topic = probstats; break;
        case 'webdev': topic = webdev; break;
        case 'test-ace-pt': topic = testACEpt; break;
        default: return;
    }
    topic = topic.split('~ ');
}

// gets the outline of an area in card form (if type == area) or as a left menu (if type is a skill)
function writeOutline(type, name='') {
    topic = sessionStorage.getItem('topic');
    // alert(topic);
    if (topic == null) {
        skill = document.getElementsByTagName('h1')[0].innerHTML;
        relevantCourses = getRelevantCourses(skill);
        if (relevantCourses.length == 1 || sessionStorage.getItem('topic') == null) topic = relevantCourses[0];
    } else topic = sessionStorage.getItem('topic');
    let input = topic;
    topicSelector();
    var domain = topic[0];
    tab = document.getElementById('tab');
    tab.classList.add(domain);
    var title = topic[1];
    // alert(title);
    title = title.split('|');
    menu = document.getElementById('skills');
    if (type == 'area') {
        document.getElementById('content').innerHTML += '<h1>' + title[0] + '</h1>';
        menu.innerHTML += '<div id="hide"><a href="/topics/areas.html"><h3 style="font-size:20px">Areas of Study</h3></a></div>';
        areas = areas.split('~ ');
        // write the left menu for an area page
        for (i = 2; i < areas.length; i++) {
            areaMod = areas[i];
            // alert('areas[' + i + '] is: ' + areas[i]);
            areaMod = areaMod.split('|');
            if (areaMod[0] == '') continue;
            if (areaMod[0][0] == '.') {
                // alert(areaMod[0]);
                document.getElementById('hide').innerHTML += '<h5 style="font-size:16px" class="' + domain + '">' + areaMod[0].substring(1) + '</h5>';
            } else {
                document.getElementById('hide').innerHTML += (areaMod.length > 1 ? '<a href="/topics/' + areaMod[1] + '">' : '') + '<p>' + areaMod[0] + '</p>' + (areaMod.length > 1 ? '</a>' : '');
                // highlight current area  
                if (name == areaMod[0]) {
                    var currentTime = new Date().getHours();
                    if (7 <= currentTime && currentTime < 20) {
                        document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:white';
                    } else {
                        document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:black';
                    }
                }
            }
        }
    }
    else menu.innerHTML += '<div id="hide"><a href="/topics/'+input+'.html"><h3 style="font-size:20px">' + title[0] + '</h3></a></div>';

    // write the left menu for a skill page or cards for an area page
    // if (type == 'areas') document.getElementById('hide').innerHTML += '<input type="submit" style="margin:0;width:100%;padding:0;border-radius:0;border-bottom:none;height:35px;border-right:none;border-left:none;background-color:lightgreen" id="practice-btn" value="Practice this skill">';
    for (i = 2; i < topic.length; i++) {
        // alert('areas is still ' + areas);
        mod = topic[i];
        // alert('mod is ' + mod);
        mod = mod.split('|');
        if (mod[0] == '') continue;
        if (mod[0][0] == '.') {
            // write a topic h5 to the menu for a skill page, e.g. 'Logic'
            if (type != 'area') {
                document.getElementById('hide').innerHTML += '<h5 style="font-size:16px" class="' + domain +'" id="' + mod[0].substring(1).toLowerCase().replace(/\s/g, '').replace('&amp','and') + '" onclick="toggleHide(\''+mod[0].toLowerCase().replace(/\s/g, '').replace('&amp;','and')+'\')">' + mod[0].substring(1) + '</h5>';
            }
            // write the title of the process and topic h5 to the menu for an area page 
            else {
                document.getElementById('content').innerHTML += '<div class="process '+'"> <p class="process-label">' + mod[0].substring(1) + '</p><div class="cards" id="hscrollable"p></div></div>';
            }
        // write a subtopic p to the left menu for a skill or area page
        } else if (type != 'area') {
            // write the subtopic for an area page
            if (type == 'areas') {
                document.getElementById('hide').innerHTML += (mod.length > 1 ? '<a hidden href="/skills/' + mod[1] + '">' : '') + '<p>' + mod[0] + '</p>' + (mod.length > 1 ? '</a>' : '');   
            } 
            // write the topic for an area page
            else {
                document.getElementById('hide').innerHTML += '<p>' + (mod.length > 1 ? '<a href="/skills/' + mod[1] + '">' : '') + mod[0] + (mod.length > 1 ? '</a>' : '') + '</p>';
            }
        // write a card to the 
        } else if (topic != 'areas') {
            // alert(domain);
            document.getElementById('content').lastChild.lastChild.innerHTML += '<a class="card '+domain+'"' + (mod.length > 1 ? ' href="/skills/' + mod[1] + '">' : '>') + '<p>' + mod[0] + '</p>' + '</a>';
            // alert(document.getElementById('content').lastChild.lastChild.lastChild.classList);
        }
        // alert(mod[0]);
        if (name == mod[0].replace('&amp;', '&')) {
            // highlight current skill
            var currentTime = new Date().getHours();
            if (7 <= currentTime && currentTime < 20) document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:white';
            else document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:black';

            // save current section
            section = document.querySelector('#hide :nth-child('+i+')');
            while (section.tagName != 'H5') {
                if (section.previousSibling == null) break;
                section = section.previousSibling;
            }
        }
    }
    toggleHide('.' + section.id);
    topic = input;
}

function openCurrent() {
}

// returns a list of courses that contain a skill
function getRelevantCourses(skill) {
    var relevantCourses = [];
    // check each course in areas array
        // in each course check each skill to find a match
        // if match, add it to relevantCourses
    // areas.forEach(course => alert(course));
    areas = areas.split('~ ');
    for (i = 0; i < areas.length; i++) {
        // topicSelector(areas[i]);
        // alert(topic);
        if (areas[i].includes('|') && !areas[i].includes('Areas of Study')) {
            areas[i] = areas[i].split('|');
            // alert(areas[i][0]);
            course = areas[i][1].replace('.html', '');
            // alert(course);
            topic = course;
            topicSelector();
            // alert(topic);
            for (j = 0; j < topic.length; j++) {
                if (topic[j].includes('|')) {
                    topic[j] = topic[j].split('|');
                    // alert(topic[j][0]);
                    if (topic[j][0] == skill) {
                        // alert('match!!! within ' + topic);
                        relevantCourses.push(course);
                    }
                    // alert(topic[j]).replace('.html','');
                }              
            }
        }
    }
    // alert('relevant courses: ' + relevantCourses);
    return relevantCourses;
}

// takes in section and hides or unhides all skills in the section on left outline
function toggleHide(section) {
    section = document.querySelector('#'+section.substring(1));
    subtopic = section.nextSibling;
    while (subtopic.tagName != null && (subtopic.tagName == 'P' || subtopic.tagName == 'A')) { 
        subtopic.hidden = (subtopic.hidden ? false : true); // if hidden then show, or vice versa
        if (subtopic.nextSibling == null) return;
        else subtopic = subtopic.nextSibling;
    }
}

function dropOutline() {
    if (document.getElementById('skills').style.width == '0px') { // open outline
        alert('no outline?');
        document.getElementById('skills').style.width = '100%';
        document.getElementById('hide').style.display = 'block';
        setTimeout(function() {
            document.getElementById('hide').style.opacity = 1;
        }, 100);
    } else { // close outline
        alert('lets get rid of this here outline');
        document.getElementById('skills').style.width = '0';
        document.getElementById('hide').style.display = 'none';
        setTimeout(function() {
            document.getElementById('hide').style.opacity = 0;
        }, 100);
    }
}

document.addEventListener('click', function(element) {
    if (element.target.nodeName == 'H1' && window.innerWidth < 600) {
        dropOutline();
    }
})