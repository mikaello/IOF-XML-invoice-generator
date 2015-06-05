/**
 * This class represents a sports club that will receive an invoice.
 *
 * A club have a name and an optional unique ID. If this club has a
 * member, it will be generated a invoice from this club.
 */
class Club {
    /** Name of the sports club */
    public final String name;

    /** An optional unique ID for this club */
    public final int id;

    /**
     * Creates a new club with a name with no ID
     *
     * @param name the name of this club
     */
    Club (String name) {
	this(name, -1);
    }

    /**
     * Creates a new club with a given name and ID
     *
     * @param name the name of this club
     * @param id the ID of this club
     */
    Club(String name, int id) {
	this.name = name;
	this.id = id;
    }
}
