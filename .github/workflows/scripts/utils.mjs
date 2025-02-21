export function getCompletionRate(value, coefficient){
    if(!coefficient){
        return 100;
    }

    return Math.round((value || 0) / coefficient * 100);
}

export function unique(arr){
    return Array.from(new Set(arr));
}

export function operatorFilter(feature) {
   return feature.properties["owner:type"] !== "cooperative" && feature.properties["operator:type"] === "cooperative";
}

export function ownerFilter(feature) {
    return feature.properties["owner:type"] === "cooperative"
}