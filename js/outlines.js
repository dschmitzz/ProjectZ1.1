// function here to write the outline based on an array

var topic;

areas = 'formsci~ Areas of Study|areas.html~ .Mathematics~ Arithmetic|arithmetic.html~ Discrete Mathematics|discrete-math.html~ Algebra I|algebra1.html~ Algebra II|algebra2.html~ Euclidean Geometry|euc-geom.html Precalculus|precalc.html~ Differential Calculus|calc-diff.html~ Integral Calculus|calc-int.html~ Multivariable Calculus|calc-multi.html~ Differential Equations|diffeq.html~ Linear Algebra|linalg.html~ '
    + 'Combinatorics|combinatorics.html~ Probability & Statistics|probstats.html~ '
    + '.Computer Science~ Computer Architecture|compArch.html~ Data Structures & Algorithms|data-structures-algorithms.html~ '
    + 'C|C.html~ '//C++|c++.html~ C#|c#.html~ Java|java.html~ Python|python.html~ 
    + 'Web Development|webdev.html~ '
    + '.Natural Science~ '//Classical Mechanics|class-mech.html~ 
    + 'Electricity & Magnetism|emag.html~ '//Modern Physics|mod-phys.html~ Quantum Mechanics|quantum-mech.html~ Cosmology|cosmology.html~ 
    + 'General Chemistry|chemistry.html~ '//Organic Chemistry|org-chem.html~ Biology|biology.html~ Earth Science|earth-sci.html~ '
    //+ '.Social Science~ '
    + 'Biology|biology.html~ '
    + '.Humanities~ Music Theory|music-theory.html '
    ;
biology = 'natsci~ Biology|biology.html~ .Fundamentals~ SI Units|si-units.html~ Significant Figures|sig-figs.html~ Scientific Method~ '
    + '.Chemistry of Life~ Elements of Life~ Chemical Reactions~ Acids & Bases~ Carbon Compounds~ Carbohydrates~ Lipids~ Proteins~ Nucleic Acids~ '
    + '.Cells~ Prokaryotic Cells~ Eukaryotic Cells~ Animal Cells~ Plant Cells~ Nucleus~ Endomembrane System~ Mitochondria & Chloroplasts~ Cytoskeleton~ '
    + '.Cell Membrane~ Cell Membrane~ Passive Transport~ Active Transport~ Exocytosis & Endocytosis~ Cell Signaling~ '
    + '.Genetics~ '
    + '.Evolution~ '
    + '.Plants~ '
    + '.Animals~ '
    + '.Ecology~ '
c = 'formsci~ C|C.html~ .Fundamentals~ Hello World|c-hello-world.html~ '
    //+ '.Operators &amp; Expressions'
        // maybe condense these types into one page or at least group a few similar ones together
    + '.Types, Memory &amp; Storage~ Data Types|c-datatypes.html~ Scope|c-scope.html~ Memory Regions|c-memory-regions.html~ '// const|c-const.html~ extern|c-extern.html~ Strings in Memory|c-strings.html~ '
    //+ '.Functions~ '
    + '.Pointers &amp; Arrays~ Pointers &amp; Addresses|c-pointers-addresses.html~ 1D Arrays|c-1d-arrays.html~ Strings|c-strings.html~ '
    + '.Structures~ typedef|c-typedef.html~ '
    //+ '.Input &amp; Output~ '
    ;
calcDiff = 'formsci~ Differential Calculus~ .Fundamentals~ Trig Functions~ '
    + '.Techniques of Differentiation~ Constant &amp; Power Rules|constant-power-rule.html~ Sum &amp; Difference Rules|sum-diff-rule.html~ Chain Rule|chain-rule.html~ Trig Derivatives~ Logarithmic Derivatives~ Product Rule|product-rule.html~ Quotient Rule~ '
;
calcInt = 'formsci~ Integral Calculus~ .Fundamentals~ '
    + 'Techniques of Integration~ Constant &amp; Power Rules~ '
;
chemistry = 'natsci~ Chemistry~ .Fundamentals~ SI Units|si-units.html~ Significant Figures|sig-figs.html~ '
+ '.Atoms~ '
+ '.Compounds~ '
+ '.Intermolecular Forces~ '
+ '.Chemical Reactions~ '
+ '.Kinetics~ '
+ '.Equilibrium~ RICE Tables|rice-tables.html~ '
+ '.Acids & Bases~ '
+ '.Thermodynamics~ '
;
combinatorics = 'formsci~ Combinatorics|combinatorics.html~ .Fundamentals~ Sum &amp; Product Rules|sum-product-rules.html~ Permutations|permutations.html~ Combinations|combinations.html~ '//Binomial Theorem|binomial-thm.html~ Prime Numbers|prime-numbers.html~ '
    // + '.Logic~ Propositions~ Logic Operators~ Demorgan\'s Law~ Logical  Equivalence~ Rules of Inference~ Quantifiers~ '
    // + '.Set Theory~ Sets &amp; Subsets|sets-subsets.html~ Venn Diagrams|venn-diagrams.html~ Axioms of Probability|axioms-of-probability.html~ Conditional Probability|conditional-probability.html~ Independence|independence.html~ '
    + '.Math Induction~ Mathematical Induction|math-induction.html~ Recursion|recursion.html~ Division Algorithm|division-algo.html~ Euclidean Algorithm (gcd)|gcd.html~ Fundamental Theorem of Arithmetic|fta.html~ '
    + '.Relations &amp; Functions~ Cartesian Products &amp; Relations|cartesian-products-relations.html~ Plain &amp; One-to-one Functions|plain-121-functions.html~ Onto Functions|onto-functions.html~ Special Functions|special-functions.html~ Pigeonhole Principle|pigeonhole-principle.html~ '
    //+ '.Inclusion/Exclusion~ Principle of Inclusion/Exclusion~ ' //Derangements
    + '.Generating Functions~ Partitions of Integers|int-partitions.html~ Exponential Generating Functions|exp-generating-fnc.html~ '
    // + '.Recurrence Relations~ '
    + '.Introductory Graph Theory~ Graph Basics|graph-basics.html~ Subgraphs|subgraphs.html~ Vertex Degree|vertex-degree.html~ Complements &amp; Isomorphism|complements-isomorphism.html~ Planar Graphs|planar-graphs.html~ Hamilton Paths &amp; Cycles|hamilton-paths-cycles.html~ Graph Coloring &amp; Chromatic Polynomials|graph-coloring.html~ '
    ;
compArch = 'formsci~ Computer Architecture|compArch.html~ .Bit Logic~ Binary|binary.html~ Integer Data Types|int-datatypes.html~ Base Conversions|base-conversions.html~ Bitwise Arithmetic Operators|bitwise-arithmetic-ops.html~ Bitwise Logic Operators|bitwise-logic-ops.html~ Masking &amp; Shifting|masking-shifting.html~ IEEE-754 Floating Point|ieee754.html~ '
    + '.Digital Logic Structures~ MOS Transistors|mos-transistors.html~ Logic Gates|logic-gates.html~ Combinational Logic Circuits|comb-logic-circuits.html~ Latches|latches.html~ Flip-flops|flip-flops.html~ Sequential Logic Circuits|seq-logic-circuits.html~ One-hot FSM|1hot-fsm.html~ Binary Encoding FSM|binary-fsm.html~ '
    + '.Von Neumann &amp; LC-3~ Memory|comp-memory.html~ Von Neumann Model|von-neumann.html~ LC-3 ISA|lc3-isa.html~ Operate Instructions|operate-instructions.html~ Data Movement Instructions|data-mvt-instructions.html~ Control Instructions|control-instructions.html~ LC-3 Datapath|lc3-datapath.html~ '
    + '.LC-3 Assembly~ Instruction Syntax|instruction-syntax.html~ Pseudo-ops|pseudo-ops.html~ Loops &amp; Conditionals|loops-conditionals.html~ Call/Return|call-return.html~ JSR &amp; JSRR|jsr-jsrr.html~ The Stack|the-stack.html~ Recursion|lc3-recursion.html~ '
    + '.Game Boy Advance~ Graphics|gba-graphics.html~ V-Blank|gba-vblank.html~ DMA|gba-dma.html~ GBA State Machines|gba-state-machines.html~ '
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
discreteMath = 'formsci~ Discrete Mathematics~ .Logic~ Propositions~ Logic Operators~ Demorgan\'s Law~ Logical  Equivalence~ Rules of Inference~ Quantifiers~ '
    + '.Set Theory~ Sets &amp; Subsets~ Set Cardinality~ Set Operations~ ';
diffeq = 'formsci~ Differential Equations~ .Fundamentals~ ';
emag = 'natsci~ Electricity &amp; Magnetism|emag.html~ .Fundamentals~ SI Units|si-units.html~ Significant Figures|sig-figs.html~ Scalars &amp; Vectors|scalars-vectors.html~ '
    + '.Electric Field~ Electric Charge &amp; Force|electric-charge-force.html~ '
    + '.Electric Field of Distributed Charges~ Rods|uc-thin-rod.html~ Rings|uc-thin-ring.html~ Disks|uc-disk.html~ Spherical Shell|spherical-shell.html~ Solid Sphere|solid-sphere.html~ ' 
    + '.Magnetic Force~ Moving Charge|mforce-moving-charge.html~ Current-Carrying Wire|mforce-wire.html~ Electric &amp; Magnetic Forces|electric-magnetic-forces.html~ '
    + '.Flux &amp; Faraday\'s Law~ Curly Electric Fields|curly-efields.html~ Faraday\'s Law|faradays-law.html~ Motional EMF|motional-emf.html~ Maxwell\'s Equations|faraday-maxwells-equations.html~ Superconductors|superconductors.html~ '
    ;
multi = 'formsci~ Multivariable Calculus~ .Fundamentals~ '
    + '.Vector Functions~ '
    + '.Partial Derivatives~ '
    + '.Multiple Integrals~ '
    + '.Greene &amp; Stokes~ ';
musicTheory = 'humanities~ Music Theory~ .Fundamentals~ Key Signature~ '
physModern = 'natsci~ Modern Physics~ .Fundamentals~ SI Units~ Significant Figures~ Scalars &amp; Vectors~ ';
precalc = 'formsci~ Precalculus|precalc.html~ .Basic Trigonometry~ Sine|sine.html~ Cosine|cosine.html~ Tangent|tangent.html~ Secant|secant.html~ Cosecant|cosecant.html~ Cotangent|cotangent.html~ '//Trig Functions|trig-functions.html~ '
;
probstats = 'formsci~ Probability &amp; Statistics|probstats.html~ '
    + '.Probability~ Independence|independence.html~ Bayes\' Theorem|bayes-theorem.html~ Random Variables|randvars.html~ '
    + '.Discrete Distributions~ Discrete Probability Distributions|disc-probdists.html~ Discrete Cumulative Distribution Functions|disc-cdfs.html~ Discrete Mean &amp; Variance|disc-mean-variance.html~ Discrete Uniform Distribution|discrete-uniform-dist.html~ Binomial Distribution|binomial-dist.html~ Geometric &amp; Negative Binomial Distributions|geometric-negbin-dist.html~ Hypergeometric Distribution|hypergeometric-dist.html~ Poisson Distribution|poisson-dist.html~ '
    + '.Continuous Distributions~ Continuous Probability Distributions|cont-probdists.html~ Continuous Cumulative Distribution Functions|cont-cdfs.html~ Continuous Mean &amp; Variance|cont-mean-variance.html~ Exponential Distribution|exp-dist.html~ '
    + '.Joint Distributions~ '//Joint Probability Distributions|joint-prob-dists.html~ '
    + 'Conditional Distributions|conditional-dists.html~ '
    + '.Descriptive Statistics~ Numerical Summaries of Data|num-sums-data.html~ Stem-and-Leaf Diagrams|stem-leaf-diagrams.html~ Frequency Distributions &amp; Histograms|histograms.html~ Box Plots|box-plots.html~ '
    + '.Point Estimation'
    ;
python = 'formsci~ Python~ '
    + '.Fundamentals~ '
    + '.Flow Control~ '
    + '.Datatypes~ '
    + '.Functions~ '
    + '.File I/O~ '
    + '.Object-Oriented Programming~ '
webdev = 'formsci~ Web Development|webdev.html~ '
    + '.HTML~ '
    + '.CSS~ '
    + '.Javascript~ '
    + '.JavaScript in the Browser~ Ajax|ajax.html~ 3rd Party Web APIs|js-web-apis.html~ '
    + '.jQuery~ '
    + '.Node.js~ '
    + '.PHP~ '
    + '.SQL~ '
    ;

function checkTopic() {
    alert(topic);
}

function setTopic(current) {
    sessionStorage.setItem('topic', current);
    topic = current;
}

function topicSelector() {
    switch (topic) {
        case 'areas': topic = areas; break;
        case 'biology': topic = biology; break;
        case 'C': topic = c; break;
        case 'calc-diff': topic = calcDiff; break;
        case 'calc-int': topic = calcInt; break;
        case 'calc-multi': topic = multi; break;
        case 'chemistry': topic = chemistry; break;
        case 'combinatorics': topic = combinatorics; break;
        case 'compArch': topic = compArch; break;
        case 'dataStrAlg': topic = dataStrAlg; break;
        case 'diffeq': topic = diffeq; break;
        case 'emag': topic = emag; break;
        case 'multi': topic = multi; break;
        case 'music-theory': topic = musicTheory; break;
        case 'physModern': topic = physModern; break;
        case 'precalc': topic = precalc; break;
        case 'probstats': topic = probstats; break;
        case 'webdev': topic = webdev; break;
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
        if (relevantCourses.length == 1) {
            topic = relevantCourses[0];
            // topicSelector();
        }
    } else topic = sessionStorage.getItem('topic');
    let input = topic;
    topicSelector();
    var domain = topic[0];
    var title = topic[1];
    // alert(title);
    title = title.split('|');
    menu = document.getElementById('skills');
    if (type == 'area') {
        document.getElementById('content').innerHTML += '<h1>' + title[0] + '</h1>';
        menu.innerHTML += '<div id="hide"><a href="/topics/areas.html"><h3 style="font-size:20px">Areas of Study</h3></a></div>';
        areas = areas.split('~ ');
        // write the menu for type area

        // write the left menu for an area page
        for (i = 2; i < areas.length; i++) {
            areaMod = areas[i];
            // alert('areas[' + i + '] is: ' + areas[i]);
            areaMod = areaMod.split('|');
            if (areaMod[0] == '') {continue;}
            if (areaMod[0][0] == '.') {
                // alert(areaMod[0]);
                document.getElementById('hide').innerHTML += '<h5 style="font-size:16px" class="' + domain + '">' + areaMod[0].substring(1,areaMod[0].length) + '</h5>';
            } else {
                document.getElementById('hide').innerHTML += (areaMod.length > 1 ? '<a href="/topics/' + areaMod[1] + '">' : '') + '<p>' + areaMod[0] + '</p>' + (areaMod.length > 1 ? '</a>' : '');
                // highlight current area  
                if (name == areaMod[0]) {
                    var currentTime = new Date().getHours();
                    if (7 <= currentTime && currentTime < 19) {
                        document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:white';
                    } else {
                        document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:black';
                    }
                }
            }
        }
    }
    else {
        menu.innerHTML += '<div id="hide"><a href="/topics/'+input+'.html"><h3 style="font-size:20px">' + title[0] + '</h3></a></div>';
    }

    // write the left menu for a skill page or cards for an area page
    for (i = 2; i < topic.length; i++) {
        // alert('areas is still ' + areas);
        mod = topic[i];
        // alert('mod is ' + mod);
        mod = mod.split('|');
        if (mod[0] == '') {continue;}
        if (mod[0][0] == '.') {
            // write a topic h5 to the menu for a skill page
            if (type != 'area') {
                document.getElementById('hide').innerHTML += '<h5 style="font-size:16px" class="' + domain +'">' + mod[0].substring(1,mod[0].length) + '</h5>';
            }
            // write the title of the process and topic h5 to the menu for an area page 
            else {
                document.getElementById('content').innerHTML += '<div class="process '+'"> <p class="process-label">' + mod[0].substring(1,mod[0].length) + '</p><div class="cards" id="hscrollable"p></div></div>';
            }
        // write a subtopic p to the left menu for a skill or area page
        } else if (type != 'area') {
            // write the subtopic for an area page
            if (type == 'areas') {
                document.getElementById('hide').innerHTML += (mod.length > 1 ? '<a href="/skills/' + mod[1] + '">' : '') + '<p>' + mod[0] + '</p>' + (mod.length > 1 ? '</a>' : '');   
            } 
            // write the topic for an 
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
            if (7 <= currentTime && currentTime < 19) {
                document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:white';
            } else {
                document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:black';
            }
        }
    }
    topic = input;
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

