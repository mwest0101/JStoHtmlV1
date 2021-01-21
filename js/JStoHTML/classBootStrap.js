
function getTableClass(number) {

    switch (number) {
        case 0:
            return ""
        case 1:
            return "table"
        case 2:
            return "table table-striped"
        case 3:
            return "table table-dark table-striped";
        case 4:
            return "table table-success table-striped";
        case 5:
            return "table table-hover";
        case 6:
            return "table table-dark table-hover";
        case 7:
            return "table table-striped table-hover";
        case 8:
            return "table table-dark";
        case 9:
            return "table table-responsive";
        case 10:
            return "table table-borderless";
        case 11:
            return "table-primary";
        case 12:
            return "table-secondary";
        case 13:
            return "table-success";
        case 14:
            return "table-danger";
        case 15:
            return "table-warning";
        case 16:
            return "table-info";
        case 17:
            return "table - light";
        case 18:
            return "table - dark";
        default:
            break;
    }

}

function getButtonClass(number) {

    switch (number) {
        case 0:
            return ""
        case 1:
            return "btn btn-primary stretched-link";
        case 2:
            return "btn btn-primary";
        case 3:
            return "btn btn-secondary";
        case 4:
            return "btn btn-success";
        case 5:
            return "btn btn-danger";
        case 6:
            return "btn btn-warning";
        case 7:
            return "btn btn-info";
        case 8:
            return "btn btn-light";
        case 9:
            return "btn btn-dark";
        case 10:
            return "btn btn-link";
        default:
            break;
    }

}


