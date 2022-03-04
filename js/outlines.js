// function here to write the outline based on an array

var topic = '';

let chemistry = 'natsci~ Chemistry~ .Fundamentals~ SI Units~ Significant Figures~ Scalars & Vectors';
let combinatorics = 'formsci~ Combinatorics~ .Fundamentals~ Sum & Product Rules|sum-product-rules.html~ Permutations|permutations.html~ Combinations|combinations.html~ Pascal\'s Triangle|pascals-triangle.html~ Binomial Theorem|binomial-thm.html~ Prime Numbers|prime-numbers.html~ '
    // + '.Logic~ Propositions~ Logic Operators~ Demorgan\'s Law~ Logical  Equivalence~ Rules of Inference~ Quantifiers~ '
    // + '.Set Theory~ Sets & Subsets|sets-subsets.html~ Venn Diagrams|venn-diagrams.html~ Axioms of Probability|axioms-of-probability.html~ Conditional Probability|conditional-probability.html~ Independence|independence.html~ '
    // + '.Math Induction~ Mathematical Induction|math-induction.html~ Recursion|recursion.html~ Division Algorithm|division-algo.html~ Euclidean Algorithm (gcd)|gcd.html~ Fundamental Theorem of Arithmetic'
    + '.Inclusion/Exclusion'
    + '.Generating Functions'
    + '.Recurrence Relations'
    ;
let compOrgStr = 'formsci~ Computer Organization & Structure~ .Fundamentals~ Binary~ Integer Data Types~ 2\'s Complement~ Base Conversions~ Bitwise Arithmetic Operators~ Bitwise Logic Operators~ IEEE Floating Point~ '
    + '.Digital Logic Structures~ MOS Transistors~ Logic Gates~ Combinational Logic Circuits~ Latches~ Flip-flops~ Sequential Logic Circuits~ One-hot FSM~ Binary Encoding FSM~ '
    + '.Von Neumann & LC-3~ Memory~ Von Neumann Model~ LC-3 ISA~ Operate Instructions~ Data Movement Instructions~ Control Instructions~ LC-3 Datapath~ '
    + '.LC-3 Assembly~ Instruction Syntax~ Pseudo-ops~ Loops & Conditionals~ '
    + '.Subroutines~ Call/Return~ JSR & JSRR~ Stack~ Recursion~ Queue~';
let dataStrAlg = 'formsci~ Data Structures & Algorithms~ .Fundamentals~ Arrays~ Big-O~ Generics~ Recursion~ '
    + '.Simple Structures~ Stacks|stacks.html~ Queues~ Deques~ '
    + '.Lists~ ArrayList~ Singly Linked List~ Doubly Linked List~ Circularly Linked List~ '
    + '.HashMaps~ External Chaining~ Linear Probing~ Quadratic Probing~ Double Hashing~ '
    + '.Trees & Skiplists~ Binary Search Tree~ Heap (Priority Queue)~ AVL Tree~ 2-4 Tree~ SplayTree~ Skiplist~ '
    + '.Sorting Algorithms~ Bubble Sort~ Cocktail Shaker Sort~ Insertion Sort~ Selection Sort~ Quicksort~ MergeSort~ LSD Radix Sort~ '
    + '.Pattern-Matching Algorithms~ Brute Force~ Boyer-Moore~ KMP~ Rabin-Karp~ '
    + '.Graph Algorithms~ Breadth-First Search~ Depth-First Search~ Dijkstra\'s Shortest Path~ Prim\'s MST~ Kruskal\'s MST~ '
    + '.Dynamic Programming~ Longest Common Substring~ Floyd Warshall~ ';
let discreteMath = 'formsci~ Discrete Mathematics~ .Logic~ Propositions~ Logic Operators~ Demorgan\'s Law~ Logical  Equivalence~ Rules of Inference~ Quantifiers~ '
    + '.Set Theory~ Sets & Subsets~ Set Cardinality~ Set Operations~ ';
let diffCalculus = 'formsci~ Differential Calculus~ .Fundamentals'
let diffeq = 'formsci~ Differential Equations~ .Fundamentals~ ';
let intCalculus = 'formsci~ Integral Calculus~ .Fundamentals'
let multi = 'formsci~ Multivariable Calculus~ .Fundamentals~ '
    + '.Vector Functions~ '
    + '.Partial Derivatives~ '
    + '.Multiple Integrals~ '
    + '.Greene & Stokes~ ';
let physClassical = 'natsci~ Classical Physics~ .Fundamentals~ SI Units~ Significant Figures~ Scalars & Vectors~ '
    // + '.Concepts of Motion~ Diagrams~ Modeling~ Position~ Velocity~ Linear Acceleration~ '
    // + '.1D Kinematics~ Uniform Motion~ Instantaneous Velocity~ Free Fall~ Inclined Planes~ '
    // + '.2D Kinematics~ Projectile Motion~ Relative Motion~ Uniform Circular Motion~ Centripetal Acceleration~ Nonuniform Circular Motion~ '
    // + '.Force~ Fundamental Interactions~ Newton\'s First Law~ Newton\'s Second Law~ Newton\'s Third Law~ Ropes & Pulleys~ '
    // + '.1D Dynamics~ Equilibrium Model~ Mass, Weight, Gravity~ Friction~ Drag~ '
    // + '.2D Dynamics~ Uniform Circular Motion~ Circular Orbits~ Nonuniform Circular Motion~ '
    // + '.Work & Kinetic Energy~ Springs~ Power~ '
    // + '.Interactions & Potential Energy~ ';
    ;
let physModern = 'natsci~ Modern Physics~ .Fundamentals~ SI Units~ Significant Figures~ Scalars & Vectors~ ';
let probstats = 'formsci~ Probability & Statistics~ '
    + '.Discrete Distributions~ '
    // + 'Probability Distributions~ Probability Mass Functions~ Cumulative Distribution Functions~ Mean & Variance~ '
    + 'Discrete Uniform Distribution|discrete-uniform-dist.html~ Binomial Distribution|binomial-dist.html~ Geometric & Negative Binomial Distributions|geometric-negbin-dist.html~ Hypergeometric Distribution|hypergeometric-dist.html~ Poisson Distribution|poisson-dist.html~ '
    // + '.Continuous Distributions~ Probabiity Distributions~ Probability Mass Functions~ Cumulative Distribution Functions~ Mean & Variance~ Continuous Uniform Distribution~ Normal Distribution~ Normal Approximation~ Exponential Distribution~ '
    // + '.Joint Distributions~ 8~ 8~ 8~ 8~ 8~'
    ;

function checkTopic() {
    alert(topic);
}

function topicSelector() {
    switch (topic) {
        case 'chemistry': topic = chemistry; break;
        case 'combinatorics': topic = combinatorics; break;
        case 'compOrgStr': topic = compOrgStr; break;
        case 'dataStrAlg': topic = dataStrAlg; break;
        case 'diffeq': topic = diffeq; break;
        case 'multi': topic = multi; break;
        case 'physClassical': topic = physClassical; break;
        case 'physModern': topic = physModern; break;
        case 'probstats': topic = probstats; break;
        default: return;
    }
    topic = topic.split('~ ');
}
function writeOutline(input) {
    topic = input;
    topicSelector(topic);
    var domain = topic[0];
    if (domain == 'formsci') {
        // document.querySelector('h1').style.backgroundColor = 'rgba(75, 189, 189, 0.781)';
    }
    var title = topic[1];
    menu = document.getElementById('skills');
    menu.innerHTML += '<div id="hide"><h3 style="font-size:20px"><a href="/topics/probstats.html">' + title + '</a></h3></div>';
    inner = document.getElementById('hide');
    for (i = 2; i < topic.length; i++) {
        mod = topic[i];
        if (mod[0] == '.') {
            document.getElementById('hide').innerHTML += '<h5 style="font-size:16px" class="' + domain + '">' + mod.substring(1,mod.length) + '</h5>';
        } else {
            mod = mod.split('|');
            if (mod.length > 1) {
                document.getElementById('hide').innerHTML += '<p><a href="/skills/' + mod[1] + '">' + mod[0] + '</a></p>'
            } else {
                document.getElementById('hide').innerHTML += '<p>' + mod[0] + '</p>';
            }
        }
        
    }
    document.getElementById('skills').style.height = '100%';
}

function writeTopicContent(course) {

}

// document.body.onload = writeOutline('physClassical');

