    // function here to write the outline based on an array

    var topic;

    areas = 'formsci~ Areas of Study|areas.html~ .Mathematics~ Precalculus|precalc.html~ Combinatorics|combinatorics.html~ Probability & Statistics|probstats.html~ '
        + '.Computer Science~ '//Computer Architecture|compArch.html~ '// + 'Web Development|webdev.html~ '
        + 'C|C.html~ '
        + '.Natural Science~ Classical Physics|physClassical.html~ Chemistry|chemistry.html~ '
        // + '.Social Science~ '
        // + '.Humanities~ '
        ;

    c = 'formsci~ C|C.html~ .Fundamentals~ Hello World|c-hello-world.html~ '
        //+ '.Operators & Expressions'
            // maybe condense these types into one page or at least group a few similar ones together
        //+ '.Types, Memory & Storage~ Data Types|c-datatypes.html~ Memory Regions|c-memory-regions.html~ '// const|c-const.html~ extern|c-extern.html~ Strings in Memory|c-strings.html~ '
        //+ '.Functions~ '
        //+ '.Pointers & Arrays~ Pointers & Addresses|c-pointers-addresses.html~ '// 1D Arrays|c-1d-arrays.html~ Strings|c-strings.html~ '
        //+ '.Structures~ typedef|c-typedef.html~ '
        //+ '.Input & Output~ '
        ;
    calcDiff = 'formsci~ Differential Calculus~ .Fundamentals~ Trig Functions~ '
    chemistry = 'natsci~ Chemistry~ .Fundamentals~ SI Units|si-units.html~ '//Significant Figures~ Scalars & Vectors'
    ;
    combinatorics = 'formsci~ Combinatorics|combinatorics.html~ .Fundamentals~ Sum & Product Rules|sum-product-rules.html~ Permutations|permutations.html~ Combinations|combinations.html~ '//Binomial Theorem|binomial-thm.html~ Prime Numbers|prime-numbers.html~ '
        // + '.Logic~ Propositions~ Logic Operators~ Demorgan\'s Law~ Logical  Equivalence~ Rules of Inference~ Quantifiers~ '
        // + '.Set Theory~ Sets & Subsets|sets-subsets.html~ Venn Diagrams|venn-diagrams.html~ Axioms of Probability|axioms-of-probability.html~ Conditional Probability|conditional-probability.html~ Independence|independence.html~ '
        //+ '.Math Induction~ Mathematical Induction|math-induction.html~ Recursion|recursion.html~ Division Algorithm|division-algo.html~ Euclidean Algorithm (gcd)|gcd.html~ Fundamental Theorem of Arithmetic'
        //+ '.Inclusion/Exclusion~ Principle of Inclusion/Exclusion~ ' //Derangements
        //+ '.Generating Functions~ Partitions of Integers|int-partitions.html~ Exponential Generating Functions|exp-generating-fnc.html~ '
        // + '.Recurrence Relations~ '
        ;
    compArch = 'formsci~ Computer Architecture|compArch.html~ '//.Fundamentals~ Binary~ Integer Data Types~ 2\'s Complement~ Base Conversions~ Bitwise Arithmetic Operators~ Bitwise Logic Operators|bitwise-logic-ops.html~ IEEE-754 Floating Point|ieee754.html~ '
        // + '.Digital Logic Structures~ MOS Transistors~ Logic Gates~ Combinational Logic Circuits~ Latches~ Flip-flops~ Sequential Logic Circuits~ One-hot FSM~ Binary Encoding FSM~ '
        // + '.Von Neumann & LC-3~ Memory~ Von Neumann Model~ LC-3 ISA~ Operate Instructions~ Data Movement Instructions~ Control Instructions~ LC-3 Datapath~ '
        + '.LC-3 Assembly~ Instruction Syntax~ '//Pseudo-ops~ Loops & Conditionals~ '
        // + '.Subroutines~ Call/Return~ JSR & JSRR~ Stack~ Recursion~ Queue~ '
        ;
    dataStrAlg = 'formsci~ Data Structures & Algorithms~ .Fundamentals~ Arrays~ Big-O~ Generics~ Recursion~ '
        + '.Simple Structures~ Stacks|stacks.html~ Queues~ Deques~ '
        + '.Lists~ ArrayList~ Singly Linked List~ Doubly Linked List~ Circularly Linked List~ '
        + '.HashMaps~ External Chaining~ Linear Probing~ Quadratic Probing~ Double Hashing~ '
        + '.Trees & Skiplists~ Binary Search Tree~ Heap (Priority Queue)~ AVL Tree~ 2-4 Tree~ SplayTree~ Skiplist~ '
        + '.Sorting Algorithms~ Bubble Sort~ Cocktail Shaker Sort~ Insertion Sort~ Selection Sort~ Quicksort~ MergeSort~ LSD Radix Sort~ '
        + '.Pattern-Matching Algorithms~ Brute Force~ Boyer-Moore~ KMP~ Rabin-Karp~ '
        + '.Graph Algorithms~ Breadth-First Search~ Depth-First Search~ Dijkstra\'s Shortest Path~ Prim\'s MST~ Kruskal\'s MST~ '
        + '.Dynamic Programming~ Longest Common Substring~ Floyd Warshall~ ';
    discreteMath = 'formsci~ Discrete Mathematics~ .Logic~ Propositions~ Logic Operators~ Demorgan\'s Law~ Logical  Equivalence~ Rules of Inference~ Quantifiers~ '
        + '.Set Theory~ Sets & Subsets~ Set Cardinality~ Set Operations~ ';
    diffCalculus = 'formsci~ Differential Calculus~ .Fundamentals'
    diffeq = 'formsci~ Differential Equations~ .Fundamentals~ ';
    intCalculus = 'formsci~ Integral Calculus~ .Fundamentals'
    multi = 'formsci~ Multivariable Calculus~ .Fundamentals~ '
        + '.Vector Functions~ '
        + '.Partial Derivatives~ '
        + '.Multiple Integrals~ '
        + '.Greene & Stokes~ ';
    physClassical = 'natsci~ Classical Physics|phys-classical.html~ .Fundamentals~ SI Units|si-units.html~ '//Significant Figures~ Scalars & Vectors~ '
        // + '.Concepts of Motion~ Diagrams~ Modeling~ Position~ Velocity~ Linear Acceleration~ '
        // + '.1D Kinematics~ Uniform Motion~ Instantaneous Velocity~ Free Fall~ Inclined Planes~ '
        // + '.2D Kinematics~ Projectile Motion~ Relative Motion~ Uniform Circular Motion~ Centripetal Acceleration~ Nonuniform Circular Motion~ '
        // + '.Force~ Fundamental Interactions~ Newton\'s First Law~ Newton\'s Second Law~ Newton\'s Third Law~ Ropes & Pulleys~ '
        // + '.1D Dynamics~ Equilibrium Model~ Mass, Weight, Gravity~ Friction~ Drag~ '
        // + '.2D Dynamics~ Uniform Circular Motion~ Circular Orbits~ Nonuniform Circular Motion~ '
        // + '.Work & Kinetic Energy~ Springs~ Power~ '
        // + '.Interactions & Potential Energy~ ';
        + '.Electric Field~ Electric Charge & Force|electric-charge-force.html~ '//
        + '.Electric Field of Distributed Charges~ Uniformly Charged Thin Rod|uc-thin-rod.html~ Uniformly Charged Thin Ring|uc-thin-ring.html~ Uniformly Charged Disk|uc-disk.html~ ' // Charged Spherical Shell~ Charged Solid Sphere~ ' 
        ;
    physModern = 'natsci~ Modern Physics~ .Fundamentals~ SI Units~ Significant Figures~ Scalars & Vectors~ ';
    precalc = 'formsci~ Precalculus|precalc.html~ .Basic Trigonometry~ Sine|sine.html~ Cosine|cosine.html~ Tangent|tangent.html~ Secant|secant.html~ Cosecant|cosecant.html~ Cotangent|cotangent.html~ '//Trig Functions|trig-functions.html~ '
    ;
    probstats = 'formsci~ Probability & Statistics|probstats.html~ '
        + '.Discrete Distributions~ '
        // + 'Probability Distributions~ Probability Mass Functions~ Cumulative Distribution Functions~ Mean & Variance~ '
        + 'Discrete Uniform Distribution|discrete-uniform-dist.html~ Binomial Distribution|binomial-dist.html~ Geometric & Negative Binomial Distributions|geometric-negbin-dist.html~ Hypergeometric Distribution|hypergeometric-dist.html~ Poisson Distribution|poisson-dist.html~ '
        + '.Continuous Distributions~ '//Probabiity Distributions~ Probability Mass Functions~ Cumulative Distribution Functions~ Mean & Variance~ Continuous Uniform Distribution~ Normal Distribution~ Normal Approximation~ 
        + 'Exponential Distribution|exp-dist.html~ '
        //+ '.Joint Distributions~ Joint Probability Distributions|joint-prob-dists.html~ '
        ;
    webdev = 'formsci~ Web Development|webdev.html~ '
        + '.HTML~ urmom~ '
        + '.CSS~ '
        + '.Javascript~ '
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
            case 'C': topic = c; break;
            case 'chemistry': topic = chemistry; break;
            case 'combinatorics': topic = combinatorics; break;
            case 'compArch': topic = compArch; break;
            case 'dataStrAlg': topic = dataStrAlg; break;
            case 'diffeq': topic = diffeq; break;
            case 'multi': topic = multi; break;
            case 'physClassical': topic = physClassical; break;
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
        // alert('topics ' + topic + '!');  
        let input = topic;
        topicSelector();
        var domain = topic[0];
        var title = topic[1];
        title = title.split('|');
        menu = document.getElementById('skills');
        if (type == 'area') {
            document.getElementById('content').innerHTML += '<h1>' + title[0] + '</h1>';
            menu.innerHTML += '<div id="hide"><h3 style="font-size:20px"><a href="/topics/areas.html">Areas of Study</a></h3></div>';
            areas = areas.split('~ ');
            // alert(topic);
            // write the menu for type area

            // write the left menu for an area page
            for (i = 2; i < areas.length; i++) {
                areaMod = areas[i];
                // alert('areas[' + i + '] is: ' + areas[i]);
                areaMod = areaMod.split('|');
                if (areaMod[0] == '') {continue;}
                if (areaMod[0][0] == '.') {
                    // alert(areaMod[0]);
                    document.getElementById('hide').innerHTML += '<h5 style="font-size:16px" class="' + domain +'">' + areaMod[0].substring(1,areaMod[0].length) + '</h5>';
                } else {
                    document.getElementById('hide').innerHTML += '<p>' + (areaMod.length > 1 ? '<a href="/topics/' + areaMod[1] + '">' : '') + areaMod[0] + (areaMod.length > 1 ? '</a>' : '') + '</p>';
                    // highlight current area  
                    if (name == areaMod[0]) {
                        var currentTime = new Date().getHours();
                        if (7 <= currentTime && currentTime < 18) {
                            document.querySelector('#hide :nth-child('+i+')').style = 'background-color:white';
                        } else {
                            document.querySelector('#hide :nth-child('+i+')').style = 'background-color:black';
                        }
                    }
                }
            }
        }
        else {
            menu.innerHTML += '<div id="hide"><h3 style="font-size:20px"><a href="/topics/'+input+'.html">' + title[0] + '</a></h3></div>';
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
                    document.getElementById('content').innerHTML += '<div class="process '+domain+'"> <p class="process-label">' + mod[0].substring(1,mod[0].length) + '</p><div class="cards" id="hscrollable"p></div></div>';
                }
            // write a subtopic p to the left menu for a skill or area page
            } else if (type != 'area') {
                // write the subtopic for an area page
                if (type == 'areas') {
                    document.getElementById('hide').innerHTML += '<p>' + (mod.length > 1 ? '<a href="/skills/' + mod[1] + '">' : '') + mod[0] + (mod.length > 1 ? '</a>' : '') + '</p>';   
                } 
                // write the topic for an 
                else {
                    document.getElementById('hide').innerHTML += '<p>' + (mod.length > 1 ? '<a href="/skills/' + mod[1] + '">' : '') + mod[0] + (mod.length > 1 ? '</a>' : '') + '</p>';
                }
            // write a card to the 
            } else if (topic != 'areas') {
                document.getElementById('content').lastChild.lastChild.innerHTML += '<a class="card"' + (mod.length > 1 ? ' href="/skills/' + mod[1] + '">' : '>') + mod[0] + '</a>';
            }
            // alert(mod[0]);
            if (name == mod[0]) {
                // highlight current skill
                var currentTime = new Date().getHours();
                if (7 <= currentTime && currentTime < 18) {
                    document.querySelector('#hide :nth-child('+i+')').style = 'background-color:white';
                } else {
                    document.querySelector('#hide :nth-child('+i+')').style = 'background-color:black';
                }
            }
        }
        topic = input;
        // alert('dont worry topic is still ' + topic + '!');
    }

