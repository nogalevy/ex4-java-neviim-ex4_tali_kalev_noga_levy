package hac.beans;

import org.springframework.stereotype.Component;

@Component
public class CartItem {
    private Integer id;
    private String price;
    private String name;
    private String title;
    private String overview;
    private String backdrop_path;
    private String poster_path;
    private String media_type;
    private String first_air_date; // YYYY-MM-DD
    private String release_date; // YYYY-MM-DD
    private String vote_average;

    public CartItem(){

    }

    public CartItem(Integer id, String price, String name, String title, String overview, String backdrop_path,
                    String poster_path, String media_type, String first_air_date, String release_date,
                    String vote_average){
        this.id = id;
        this.price = price;
        this.name = name;
        this.title = title;
        this.overview = overview;
        this.backdrop_path = backdrop_path;
        this.poster_path = poster_path;
        this.media_type= media_type;
        this.first_air_date= first_air_date; // YYYY-MM-DD
        this.release_date= release_date; // YYYY-MM-DD
        this.vote_average = vote_average;
    }

    /**
     * id getter
     * @return id
     */
    public Integer getId(){
        return this.id;
    }

    /**
     * id setter
     * @param id Integer
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * name getter
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * name setter
     * @param name String
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * overview getter
     * @return overview
     */
    public String getOverview() {
        return overview;
    }

    /**
     * overview stter
     * @param overview String
     */
    public void setOverview(String overview) {
        this.overview = overview;
    }

    /**
     * backdrop path getter
     * @return backdrop_path
     */
    public String getBackdrop_path() {
        return backdrop_path;
    }

    /**
     * backdrop_path setter
     * @param backdrop_path String
     */
    public void setBackdrop_path(String backdrop_path) {
        this.backdrop_path = backdrop_path;
    }

    /**
     * poster_path getter
     * @return poster_path
     */
    public String getPoster_path() {
        return poster_path;
    }

    /**
     * poster_path setter
     * @param poster_path String
     */
    public void setPoster_path(String poster_path) {
        this.poster_path = poster_path;
    }

    /**
     * media_type getter
     * @return media_type
     */
    public String getMedia_type() {
        return media_type;
    }

    /**
     * media_type setter
     * @param media_type String
     */
    public void setMedia_type(String media_type) {
        this.media_type = media_type;
    }

    /**
     * first_air_date setter
     * @return first_air_date
     */
    public String getFirst_air_date() {
        return first_air_date;
    }

    /**
     * first_air_date setter
     * @param first_air_date String
     */
    public void setFirst_air_date(String first_air_date) {
        this.first_air_date = first_air_date;
    }

    /**
     * vote_average getter
     * @return vote_average
     */
    public String getVote_average() {
        return vote_average;
    }

    /**
     * vote_average setter
     * @param vote_average String
     */
    public void setVote_average(String vote_average) {
        this.vote_average = vote_average;
    }

    /**
     * title getter
     * @return title
     */
    public String getTitle() {
        return title;
    }

    /**
     * title setter
     * @param title String
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * release_date getter
     * @return release_date
     */
    public String getRelease_date() {
        return release_date;
    }

    /**
     * release_date setter
     * @param release_date String
     */
    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    /**
     * price getter
     * @return price
     */
    public String getPrice() {
        return price;
    }

    /**
     * price setter
     * @param price String
     */
    public void setPrice(String price) {
        this.price = price;
    }
}
