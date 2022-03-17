    // function here to write the outline based on an array

    var topic;

    areas = 'formsci~ Areas of Study|areas.html~ .Mathematics~ '//Arithmetic|arithmetic.html~ Discrete Mathematics|discrete-math.html~ Algebra I|algebra1.html~ Algebra II|algebra2.html~ Euclidean Geometry|euc-geom.html Precalculus|precalc.html~ Differential Calculus|calc-diff.html~ Integral Calculus|calc-int.html~ Multivariable Calculus|calc-multi.html~ Differential Equations|diffeq.html~ Linear Algebra|linalg.html~ 
        + 'Combinatorics|combinatorics.html~ Probability & Statistics|probstats.html~ '
        + '.Computer Science~ Computer Architecture|compArch.html~ '//Data Structures & Algorithms|data-structures-algorithms.html~ 
        + 'C|C.html~ '//C++|c++.html~ C#|c#.html~ Java|java.html~ Python|python.html~ 
        + 'Web Development|webdev.html~ '
        + '.Natural Science~ '//Classical Mechanics|class-mech.html~ 
        + 'Electricity & Magnetism|emag.html~ '//Modern Physics|mod-phys.html~ Quantum Mechanics|quantum-mech.html~ Cosmology|cosmology.html~ General Chemistry|chemistry.html~ Organic Chemistry|org-chem.html~ Biology|biology.html~ Earth Science|earth-sci.html~ '
        //+ '.Social Science~ '
        //+ '.Humanities~ Music Theory|music-theory.html '
        ;

    c = 'formsci~ C|C.html~ .Fundamentals~ Hello World|c-hello-world.html~ '
        //+ '.Operators & Expressions'
            // maybe condense these types into one page or at least group a few similar ones together
        + '.Types, Memory & Storage~ Data Types|c-datatypes.html~ Scope|c-scope.html~ Memory Regions|c-memory-regions.html~ '// const|c-const.html~ extern|c-extern.html~ Strings in Memory|c-strings.html~ '
        //+ '.Functions~ '
        + '.Pointers & Arrays~ Pointers & Addresses|c-pointers-addresses.html~ 1D Arrays|c-1d-arrays.html~ Strings|c-strings.html~ '
        + '.Structures~ typedef|c-typedef.html~ '
        //+ '.Input & Output~ '
        ;
    calcDiff = 'formsci~ Differential Calculus~ .Fundamentals~ Trig Functions~ '
        + '.Techniques of Differentiation~ Constant & Power Rules|constant-power-rule.html~ Sum & Difference Rules|sum-diff-rule.html~ Chain Rule|chain-rule.html~ Trig Derivatives~ Logarithmic Derivatives~ Product Rule|product-rule.html~ Quotient Rule~ '
    ;
    calcInt = 'formsci~ Integral Calculus~ .Fundamentals~ '
        + 'Techniques of Integration~ Constant & Power Rules~ '
    ;
    chemistry = 'natsci~ Chemistry~ .Fundamentals~ SI Units|si-units.html~ '//Significant Figures~ Scalars & Vectors'
    ;
    combinatorics = 'formsci~ Combinatorics|combinatorics.html~ .Fundamentals~ Sum & Product Rules|sum-product-rules.html~ Permutations|permutations.html~ Combinations|combinations.html~ '//Binomial Theorem|binomial-thm.html~ Prime Numbers|prime-numbers.html~ '
        // + '.Logic~ Propositions~ Logic Operators~ Demorgan\'s Law~ Logical  Equivalence~ Rules of Inference~ Quantifiers~ '
        // + '.Set Theory~ Sets & Subsets|sets-subsets.html~ Venn Diagrams|venn-diagrams.html~ Axioms of Probability|axioms-of-probability.html~ Conditional Probability|conditional-probability.html~ Independence|independence.html~ '
        //+ '.Math Induction~ Mathematical Induction|math-induction.html~ Recursion|recursion.html~ Division Algorithm|division-algo.html~ Euclidean Algorithm (gcd)|gcd.html~ Fundamental Theorem of Arithmetic'
        //+ '.Inclusion/Exclusion~ Principle of Inclusion/Exclusion~ ' //Derangements
        + '.Generating Functions~ Partitions of Integers|int-partitions.html~ Exponential Generating Functions|exp-generating-fnc.html~ '
        // + '.Recurrence Relations~ '
        ;
    compArch = 'formsci~ Computer Architecture|compArch.html~ .Fundamentals~ Binary~ Integer Data Types~ Signed Integers~ Base Conversions~ Bitwise Arithmetic Operators~ Bitwise Logic Operators|bitwise-logic-ops.html~ Masking & Shifting~ IEEE-754 Floating Point|ieee754.html~ '
        + '.Digital Logic Structures~ MOS Transistors~ Logic Gates~ Combinational Logic Circuits~ Latches~ Flip-flops~ Sequential Logic Circuits~ One-hot FSM~ Binary Encoding FSM~ '
        + '.Von Neumann & LC-3~ Memory~ Von Neumann Model~ LC-3 ISA~ Operate Instructions~ Data Movement Instructions~ Control Instructions~ LC-3 Datapath~ '
        + '.LC-3 Assembly~ Instruction Syntax~ Pseudo-ops|pseudo-ops.html~ Loops & Conditionals~ '
        + '.Subroutines~ Call/Return~ JSR & JSRR~ The Stack|the-stack.html~ Recursion~ Queue~ '
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
    diffeq = 'formsci~ Differential Equations~ .Fundamentals~ ';
    emag = 'natsci~ Electricity & Magnetism|emag.html~ .Fundamentals~ SI Units|si-units.html~ Significant Figures~ Scalars & Vectors~ '
        + '.Electric Field~ Electric Charge & Force|electric-charge-force.html~ '//
        + '.Electric Field of Distributed Charges~ Uniformly Charged Thin Rod|uc-thin-rod.html~ Uniformly Charged Thin Ring|uc-thin-ring.html~ Uniformly Charged Disk|uc-disk.html~ Charged Spherical Shell~ Charged Solid Sphere~ ' 
        + '.Magnetic Force~ Moving Charge~ Current-Carrying Wire~ Electric & Magnetic Forces|electric-magnetic-forces.html~ '
        + '.Flux & Faraday\'s Law~ Curly Electric Fields~ Faraday\'s Law~ Motional EMF~ Maxwell\'s Equations~ Superconductors~ '
        ;
    multi = 'formsci~ Multivariable Calculus~ .Fundamentals~ '
        + '.Vector Functions~ '
        + '.Partial Derivatives~ '
        + '.Multiple Integrals~ '
        + '.Greene & Stokes~ ';
    physModern = 'natsci~ Modern Physics~ .Fundamentals~ SI Units~ Significant Figures~ Scalars & Vectors~ ';
    precalc = 'formsci~ Precalculus|precalc.html~ .Basic Trigonometry~ Sine|sine.html~ Cosine|cosine.html~ Tangent|tangent.html~ Secant|secant.html~ Cosecant|cosecant.html~ Cotangent|cotangent.html~ '//Trig Functions|trig-functions.html~ '
    ;
    probstats = 'formsci~ Probability & Statistics|probstats.html~ '
        + '.Discrete Distributions~ '
        // + 'Probability Distributions~ Probability Mass Functions~ Cumulative Distribution Functions~ Mean & Variance~ '
        + 'Discrete Uniform Distribution|discrete-uniform-dist.html~ Binomial Distribution|binomial-dist.html~ Geometric & Negative Binomial Distributions|geometric-negbin-dist.html~ Hypergeometric Distribution|hypergeometric-dist.html~ Poisson Distribution|poisson-dist.html~ '
        + '.Continuous Distributions~ '//Probabiity Distributions~ Probability Mass Functions~ Cumulative Distribution Functions~ Mean & Variance~ Continuous Uniform Distribution~ Normal Distribution~ Normal Approximation~ 
        + 'Exponential Distribution|exp-dist.html~ '
        + '.Joint Distributions~ '//Joint Probability Distributions|joint-prob-dists.html~ '
        + 'Conditional Distributions|conditional-dists.html~ Independence|independence.html'
        ;
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
            menu.innerHTML += '<div id="hide"><a href="/topics/areas.html"><h3 style="font-size:20px">Areas of Study</h3></a></div>';
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
                    document.getElementById('hide').innerHTML += (areaMod.length > 1 ? '<a href="/topics/' + areaMod[1] + '">' : '') + '<p>' + areaMod[0] + '</p>' + (areaMod.length > 1 ? '</a>' : '');
                    // highlight current area  
                    if (name == areaMod[0]) {
                        var currentTime = new Date().getHours();
                        if (7 <= currentTime && currentTime < 18) {
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
                    document.getElementById('content').innerHTML += '<div class="process '+domain+'"> <p class="process-label">' + mod[0].substring(1,mod[0].length) + '</p><div class="cards" id="hscrollable"p></div></div>';
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
                document.getElementById('content').lastChild.lastChild.innerHTML += '<a class="card"' + (mod.length > 1 ? ' href="/skills/' + mod[1] + '">' : '>') + mod[0] + '</a>';
            }
            // alert(mod[0]);
            if (name == mod[0]) {
                // highlight current skill
                var currentTime = new Date().getHours();
                if (7 <= currentTime && currentTime < 18) {
                    document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:white';
                } else {
                    document.querySelector('#hide :nth-child('+i+') p').style = 'background-color:black';
                }
            }
        }
        topic = input;
        // alert('dont worry topic is still ' + topic + '!');
    }

