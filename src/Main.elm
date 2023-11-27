module Main exposing (..)

import Browser
import Html exposing (Html, div, h1, h2, h3, h5, p, text, img)
import Html.Attributes exposing (class, src)
import Html.Events exposing (onClick)
import Random exposing (Generator)
import Maybe exposing (withDefault)
import Html exposing (a)
import Html.Attributes exposing (href)
import Html.Attributes exposing (target)

type Msg = Loading | Display Quality | ShowProject Project
type alias Model = {
        introduction: String,
        subtext: Quality,
        project: ProjectContent
    }

type alias Quality = {
        title: String,
        reason: String
    }

type alias ProjectContent = {
        title: String,
        content: String,
        link: Maybe (Html Msg),
        img: Maybe String
    }

type Project = Racetrack | TimerTree

main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }

init : flags -> (Model, Cmd Msg)
init _ = (Model "Give me a break I'm thinking!" (Quality "" "") (ProjectContent "" "" Nothing Nothing), Cmd.batch [ Random.generate Display qualityGenerator ])

update : Msg -> Model -> (Model, Cmd Msg)
update msg model = 
    case msg of
        Loading -> (model, Cmd.batch [ Random.generate Display qualityGenerator ])
        Display q -> ({ model | introduction = "And much more:", subtext = q }, Cmd.none)
        ShowProject p -> ({ model | project = projectEnumerator p }, Cmd.none) 

view : Model -> Html Msg
view model =
    div [ class "" ] [ 
        div [ class "container-fluid g-0 row w-100" ]
            [ h1 [ class "display-1 col-lg-5 col-md-6 jumbotr" ] [ text "Barney Campbell" ]
            , div [ class "sm-text-center col-lg-7 col-md-6 p-3 d-flex flex-column justify-content-center" ]
                [ qualityHtml model.subtext
                , p [ class "lead" ] [ text model.introduction ]
            ]
        ]
        , div [ class "container-fluid row" ] 
            [ div [ class "col-lg-5 col-md-6 d-flex cards row justify-content-between gx-3" ]
                [ cardHelper "TimerTree" "A useful little app that allows you to generate a dependency tree of timers for complex cookery" Nothing TimerTree
                , cardHelper "Racetrack" "My dissertation project where I programmed 'racetrack' and an algorithm to play the game" Nothing Racetrack
            ]
            , div [ class "project-overview col-lg-7 col-md-5 d-flex flex-column ps-4" ]
                [ h2 [] [ text model.project.title ]
                , p [] [ text model.project.content, maybeLink model.project.link ]
                , img [ src (withDefault "" model.project.img)] []
            ]
        ]
    ]

cardHelper : String -> String -> Maybe String -> Project -> Html Msg
cardHelper title content image kind =
    case image of
        Just url -> div [ class "card info-card col-sm-5 p-2 m-1", onClick (ShowProject kind) ]
                    [ img [ src url ] []
                    , h5 [] [ text title ]
                    , p [] [ text content ]
                    ]
        Nothing  -> div [ class "card info-card col-sm-5 p-1 m-3", onClick (ShowProject kind) ]
                    [ h5 [] [ text title ]
                    , p [] [ text content ]]

projectEnumerator : Project -> ProjectContent
projectEnumerator proj = 
    case proj of
        Racetrack -> ProjectContent "Racetrack" "A mathematical game in which a player moves a 'car' around a race track defined in a grid. Each turn players choose to move their car to one of 9 new positions which are calculated by applying the current speed of the car to the car's current position. " (Just (a [ href "https://racetrack-94772.web.app", target "_blank" ] [ text "Try it out!" ])) Nothing
        TimerTree -> ProjectContent "TimerTree" "A timer app that allows you to define complex trees of dependent steps for recipes. The goal is to allow the steps to be entered and then the user informed when each step should start for it to end on time. It is still currently being developed so is currently rough around the edges but the concept is there. " (Just (a [ href "https://timer-tree.web.app", target "_blank" ] [ text "Have a look" ])) Nothing
        
maybeLink : Maybe (Html Msg) -> Html Msg
maybeLink link = case link of
    Just a  -> a
    Nothing -> text ""

qualityGenerator : Generator Quality
qualityGenerator = Random.map getQuality ( Random.int 0 3 )

qualityHtml : Quality -> Html Msg
qualityHtml quality = div [ ] 
    [ h3 [ class "display-4" ] [ text quality.title ]
    , p [] [ text quality.reason ] ]

getQuality : Int -> Quality
getQuality val = 
    case val of
        0 -> Quality "Cyclist" "My favourite sport 🚲. Also props to F1 for being my favourite to watch (although I don't forsee myself getting in the cockpit)"
        1 -> Quality "Project Starter" "I have a habit of starting new things given any excuse ;). Rest assured I'm doing my best to finish one before working on the next. If you're seeing this page I have completed a project!" 
        2 -> Quality "Language Learner" "Name a language and I've probably tried it. I love investigating new things. Unrelated sidenote: I wrote this page using Elm."
        _ -> Quality "Developer" "I write code. I plan to write more code."
