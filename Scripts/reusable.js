/**
 * Created by Dylan on 5/06/2016.
 */

function reusable(identity) {
    document.getElementById(identity).innerHTML = "<script src=\"Scripts/" + identity + "\"></script>";
    //document.getElementById(identity).innerHTML = "<p>this is a header </p>";
}


